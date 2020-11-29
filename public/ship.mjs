import Vector from './vector.mjs'

export default class Ship {
  constructor(x, y, speed, direction, gravity = 0) {
    this.position = new Vector(x, y)
    this.velocity = Vector.fromMagnitudeAndAngle(speed, direction)
    this.gravity = new Vector(0, gravity)
    this.angle = 0
    this.isThrusting = false
  }

  get x() {
    return this.position.x
  }

  set x(v) {
    this.position.x = v
  }

  get y() {
    return this.position.y
  }

  set y(v) {
    this.position.y = v
  }

  accelerate(acceleration) {
    this.velocity = this.velocity.add(acceleration)
  }

  rotate(angle) {
    this.angle += angle
  }

  update(context) {
    this.accelerate(this.gravity)
    this.position = this.position.add(this.velocity)
    this.draw(context)
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

