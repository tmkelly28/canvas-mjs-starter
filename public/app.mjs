const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Ball {
  constructor({ x, y, radius, color, ctx }) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.ctx = ctx
  }

  update() {
    this.draw()
  }

  draw() {
    const { x, y, radius, color, ctx } = this
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fillStyle = color
    ctx.fill()
  }
}

class Rect {
  constructor({ x, y, width, height, color, ctx }) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.ctx = ctx
  }

  update() {
    this.draw()
  }

  draw() {
    const { x, y, color, width, height, ctx } = this
    ctx.fillStyle = color
    ctx.fillRect(x, y, width, height)
  }
}

class World {
  constructor() {
    this.objects = []
  }

  add(object) {
    this.objects.push(object)
  }

  update() {
    this.objects.forEach(obj => obj.update())
  }
}

const world = new World()
const ball = new Ball({ x: 50, y: 50, radius: 50, color: 'blue', ctx })
const rect = new Rect({ x: 150, y: 150, height: 25, width: 25, color: 'green', ctx })
world.add(ball)
world.add(rect)

const animate = () => {
  window.requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  world.update()
}

const onResize = () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

window.addEventListener('resize', onResize, true)

animate()
