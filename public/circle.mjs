export default class Circle {
  constructor({ x, y, radius, color }) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  update(world) {
    this.draw(world)
  }

  draw(world) {
    const { ctx } = world
    const { x, y, radius, color } = this

    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2, true)
    ctx.closePath()

    this.stroke(ctx, color)
  }

  stroke(ctx, color) {
    ctx.strokeStyle = color
    ctx.stroke()
  }

  fill(ctx, color) {
    ctx.fillStyle = color
    ctx.fill()
  }
}
