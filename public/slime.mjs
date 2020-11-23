export default class Slime {
  constructor({ x, y, color, ctx }) {
    this.x = x
    this.y = y
    this.dx = 0
    this.dy = 0
    this.radius = 50
    this.color = color
    this.ctx = ctx
  }

  update(world) {
    const { state } = world

    if (state.direction) this.dx = 3 * state.direction
    else {
      if (this.dx === 0) ;
      else if (Math.abs(this.dx) < 0.01) this.dx = 0
      else this.dx += (this.dx * -0.05) 
    }

    if (state.jumping && this.dy === 0) this.dy = -5
    else {
      if (this.dy === 0) ;
      else if (this.y >= window.innerHeight) {
        this.dy = 0
        this.y = window.innerHeight
        world.dispatch({ type: 'LAND' })
      } else this.dy += 0.15
    }

    this.x += this.dx
    this.y += this.dy
    this.draw()
  }

  filledPath(x, y, radius, endAngle, color) {
    const { ctx } = this

    ctx.beginPath()
    ctx.arc(x, y, radius, 0, endAngle, true)
    ctx.closePath()
    ctx.fillStyle = color
    ctx.fill()
  }

  draw() {
    this.body()
    this.eye()
    this.pupil()
  }

  body() {
    const { x, y, radius, color } = this
    this.filledPath(x, y, radius, Math.PI, color)
  }

  eye() {
    const { x, y } = this
    this.filledPath(x + 30, y - 35, 10, Math.PI * 2, 'white')
  }

  pupil() {
    const { x, y } = this
    this.filledPath(x + 33, y - 35, 4, Math.PI * 2, 'black')
  }
}
