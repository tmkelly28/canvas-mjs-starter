export default class World {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.mouse = { x: 0, y: 0 }
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

  updateMouse(x, y) {
    this.mouse = { x, y }
  }
}
