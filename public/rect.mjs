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
    const { ctx } = world
    const { x, y, color, width, height } = this

    ctx.fillStyle = color
    ctx.fillRect(x, y, width, height)
  }
}


