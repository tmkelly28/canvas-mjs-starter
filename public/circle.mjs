export default class Circle {
  constructor({ x, y, radius, color }) {
    this.x = x
    this.y = y
    this.dx = 1
    this.dy = 0
    this.radius = radius
    this.color = color
  }

  update(world) {
    this.draw(world)

    const { canvas } = world

    if (this.x >= canvas.width + this.radius) {
      this.x = 0
    }

    if (this.y >= canvas.height + this.radius) {
      this.y = 0
    }

    if (this.y <= 0 - this.radius) {
      this.y = canvas.height
    }

    this.x += this.dx

    const l = 100 // wavelength
    const p = Math.PI * 2
    const k = p / l // spatial angular frequency (wavenumber)
    const a = 3 // amplitude
    this.dy = a * Math.sin(k * this.x - p)
    this.y += this.dy
  }

  draw(world) {
    const { ctx } = world
    const { x, y, radius, color } = this

    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.strokeStyle = color
    ctx.stroke()
  }
}
