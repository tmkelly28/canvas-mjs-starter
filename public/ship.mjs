import Vector from './vector.mjs'
import Particle from './particle2.mjs'

export default class Ship extends Particle {
  constructor(x, y, speed, direction, gravity = 0) {
    super({ x, y, speed, direction })
    this.gravity = new Vector(0, gravity)
    this.angle = 0
    this.isThrusting = false
    this.isLanded = false
  }

  rotate(angle) {
    this.angle += angle
  }

  update(context) {
    if (!this.isLanded) {
      this.accelerate(this.gravity)
      this.position = this.position.add(this.velocity)
    }
    this.draw(context)
  }

  halt() {
    this.isLanded = true
  }

  draw(context) {
    context.beginPath()

    context.save()
    context.translate(this.position.x, this.position.y)
    context.rotate(this.angle)

    // want the ship to be facing left when we start
    context.moveTo(10, 0)
    context.lineTo(-10, -5)
    context.moveTo(10, 0)
    context.lineTo(-10, 5)
    context.moveTo(-10, 5)
    context.lineTo(-10, -5)

    if (this.isThrusting) {
      context.moveTo(-10, 0)
      context.lineTo(-13, 0)
    }

    context.stroke()

    context.restore()
  }
}
