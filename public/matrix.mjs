import Vector from './vector.mjs'
import { randomColor } from './utils.mjs'

export default class Matrix {
  constructor(column1, column2) {
    this.column1 = column1
    this.column2 = column2
  }

  applyTransformation(vector) {
    const [a, c] = this.column1
    const [b, d] = this.column2

    const ax = vector.x * a
    const cx = vector.x * c

    const by = vector.y * b
    const dy = vector.y * d

    return new Vector(
      ax + by,
      cx + dy,
      randomColor(),
      vector.origin,
      vector.step
    )
  }
}
