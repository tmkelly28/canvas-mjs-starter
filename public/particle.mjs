import Vector from './vector.mjs'

export default class Particle {
  constructor(x, y, speed, direction, gravity = 0) {
    this.position = new Vector(x, y)
    this.velocity = Vector.fromMagnitudeAndAngle(speed, direction)
    this.gravity = new Vector(0, gravity)
  }

  accelerate(acceleration) {
    this.velocity = this.velocity.add(acceleration)
  }

  update(context) {
    this.accelerate(this.gravity)
    this.position = this.position.add(this.velocity)
    this.draw(context)
  }

  draw(context) {
    context.beginPath()
    context.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2, false)
    context.fill()
  }
}
