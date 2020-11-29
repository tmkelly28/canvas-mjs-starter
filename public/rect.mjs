export default class Rect {
  constructor({ x, y, width, height, color }) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
  }

  update(world) {
    this.draw(world)
  }

  draw(world) {
    this.stroke(world)
  }

  fill(world) {
    const { ctx } = world
    const { x, y, color, width, height } = this

    ctx.fillStyle = color
    ctx.fillRect(x, y, width, height)
  }

  stroke(world) {
    const { ctx } = world
    const { x, y, color, width, height } = this

    ctx.strokeStyle = color
    ctx.strokeRect(x, y, width, height)
  }
}

