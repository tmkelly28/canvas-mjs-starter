const friction = 0.9
const gravity = 1

export default class Ball {
  constructor({ x, y, radius, color, ctx, canvas }) {
    this.x = x
    this.y = y
    this.dx = 1
    this.dy = 4
    this.radius = radius
    this.color = color
    this.ctx = ctx
    this.canvas = canvas
  }

  update(world) {
    const { state: { slime } } = world

    if (this.y + this.radius > this.canvas.height) {
      if (Math.abs(this.dy) < 1) {
        this.dy = 0
      } else {
        this.dy = Math.abs(this.dy) * friction * -1
      }
    } else {
      this.dy += gravity
    }

    const farWallCollision = this.x + this.radius >= this.canvas.width
    const nearWallCollision = this.x <= this.radius
    if (farWallCollision || nearWallCollision) {
      this.dx *= -1
    }

    const rsum = this.radius + slime.radius
    const dx = Math.abs(this.x - slime.x)
    const dy = Math.abs(this.y - slime.y)

    // simple circle collision
    const p = Math.pow(dx, 2) + Math.pow(dy, 2) <= Math.pow(rsum, 2)

    if (p) {
      if (this.x < slime.x) {
        this.dx = -1
      } else if (this.x >= slime.x) {
        this.dx = 1
      }

      // if Math.abs(this.x - slime.x) === 0, want to just go straight up
      this.dy = Math.abs(this.dy) * -1
      this.dy -= Math.abs(this.x - slime.x) * .01
    }

    this.x += this.dx
    this.y += this.dy
    this.draw()
  }

  draw() {
    const { x, y, radius, color, ctx } = this
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fillStyle = color
    ctx.fill()
  }
}
