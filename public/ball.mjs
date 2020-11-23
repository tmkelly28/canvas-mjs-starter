const friction = 0.9
const gravity = 1

export default class Ball {
  constructor({ x, y, radius, color, ctx }) {
    this.x = x
    this.y = y
    this.dx = 0
    this.dy = 4
    this.radius = radius
    this.color = color
    this.ctx = ctx
  }

  update() {
    if (this.y + this.radius > window.innerHeight) {
      if (Math.abs(this.dy) < 1) {
        this.dy = 0
      } else {
        this.dy = Math.abs(this.dy) * friction * -1
      }
    } else {
      this.dy += gravity
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
