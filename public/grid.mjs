export default class Grid {
  constructor(height, width, step) {
    this.height = height
    this.width = width
    this.step = step
  }

  update(context) {
    const { height, width, step } = this

    for (let y = 0; y <= height; y += step) {
      context.beginPath()
      context.moveTo(0, y)
      context.lineTo(width, y)
      context.strokeStyle = 'black'
      context.stroke()
    }

    for (let x = 0; x <= width; x += step) {
      context.beginPath()
      context.moveTo(x, 0)
      context.lineTo(x, height)
      context.strokeStyle = 'black'
      context.stroke()
    }
  }
}
