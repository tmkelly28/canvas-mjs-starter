export default class Vector {
  constructor(x, y, color, origin, step) {
    this.x = x
    this.y = y
    this.origin = origin
    this.step = step
    this.color = color
    this.growth = 0.01
    this.growthSpeed = 0.01
  }

  update(context) {
    const { x, y, color, origin, step } = this
    const angle = Math.atan2(-y, x)

    context.save()
    context.translate(origin.x, origin.y)
    context.rotate(angle)

    const actualMagnitude = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * step
    const magnitude = actualMagnitude * this.growth

    if (this.growth < 1) {
      this.growth += this.growthSpeed
    }

    context.beginPath()
    context.moveTo(0, 0)
    context.lineTo(magnitude, 0)
    context.strokeStyle = color
    context.stroke()

    context.beginPath()
    context.moveTo(magnitude, 0)
    context.lineTo(magnitude - 10, -5)
    context.lineTo(magnitude - 10, 5)
    context.fillStyle = color
    context.fill()
    context.restore()
  }
}
