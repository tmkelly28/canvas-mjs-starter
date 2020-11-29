export default class Vector {
  constructor(x, y) {
    this._x = x
    this._y = y
  }

  get x() {
    return this._x
  }

  set x(value) {
    this._x = value
  }

  get y() {
    return this._y
  }

  set y(value) {
    this._y = value
  }

  get angle() {
    return Math.atan2(this._y, this._x)
  }

  set angle(value) {
    const magnitude = this.magnitude
    this._x = Math.cos(value) * magnitude
    this._y = Math.sin(value) * magnitude
  }

  get magnitude() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this._y, 2))
  }

  set magnitude(value) {
    const angle = this.angle
    this._x = Math.cos(angle) * value
    this._y = Math.sin(angle) * value
  }

  add(vector) {
    return new Vector(this._x + vector.x, this._y + vector.y)
  }

  subtract(vector) {
    return new Vector(this._x - vector.x, this._y - vector.y)
  }

  scalarMultiply(scalar) {
    return new Vector(this._x * scalar, this._y * scalar)
  }

  scalarDivide(scalar) {
    return new Vector(this._x / scalar, this._y / scalar)
  }

  dot(vector) {
    return (this._x * vector.x) + (this._y * vector.y)
  }
}
