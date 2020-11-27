export default class World {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.objects = []
  }

  add(...objects) {
    this.objects.push(...objects)
  }

  update() {
    this.clear()
    this.objects.forEach(obj => obj.update(this))
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  resize() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }
}
