import Vector from './vector.mjs'

export default class Particle {
  constructor(x, y, speed, direction) {
    this.position = new Vector(x, y)
    this.velocity = new Vector(0, 0)
    this.velocity.magnitude = speed
    this.velocity.angle = direction
  }

  accelerate(acceleration) {
    this.velocity = this.velocity.add(acceleration)
  }

  update(context) {
    this.position = this.position.add(this.velocity)
    this.draw(context)
  }

  draw(context) {
    context.beginPath()
    context.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2, false)
    context.fill()
  }
}
