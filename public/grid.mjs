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
      if (y === height / 2) {
        context.strokeStyle = 'antiquewhite'
      } else {
        context.strokeStyle = 'cadetblue'
      }
      context.stroke()
    }

    for (let x = 0; x <= width; x += step) {
      context.beginPath()
      context.moveTo(x, 0)
      context.lineTo(x, height)
      if (x === width / 2) {
        context.strokeStyle = 'antiquewhite'
      } else {
        context.strokeStyle = 'darkolivegreen'
      }
      context.stroke()
    }
  }
}
