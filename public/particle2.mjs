import Vector from './vector.mjs'

export default class Particle {
  constructor({x, y, radius, speed, direction, color, mass = 0}) {
    this.position = new Vector(x, y)
    this.velocity = Vector.fromMagnitudeAndAngle(speed, direction)
    this.mass = mass
    this.radius = radius
    this.color = color
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

  gravitateTo(object) {
    const distance = this.distanceTo(object.position)
    const angle = this.angleTo(object.position)
    const magnitude = object.mass / Math.pow(distance, 2)
    const gravity = Vector.fromMagnitudeAndAngle(magnitude, angle)
    this.velocity = this.velocity.add(gravity)
  }

  distanceTo(position) {
    return Math.sqrt(
      Math.pow(position.y - this.y, 2) +
      Math.pow(position.x - this.x, 2)
    )
  }

  angleTo(position) {
    return Math.atan2(
      position.y - this.y,
      position.x - this.x
    )
  }

  update(context) {
    this.position = this.position.add(this.velocity)
    this.draw(context)
  }

  draw(context) {
    context.beginPath()
    context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
    context.fillStyle = this.color
    context.fill()
  }
}
