const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const mouse = { x: 0, y: 0 }

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// global state
let centerX = canvas.width / 2
let centerY = canvas.height / 2

class Planet {
  constructor(radius, distanceFromCenter, color) {
    this.x = centerX + distanceFromCenter
    this.y = centerY + distanceFromCenter
    this.radius = radius
    this.distanceFromCenter = distanceFromCenter
    this.color = color
    this.speed = Math.random() * 0.1
    this.angle = 0
  }

  update() {
    this.angle += this.speed
    this.x = centerX + this.distanceFromCenter * Math.cos(this.angle)
    this.y = centerY + this.distanceFromCenter * Math.sin(this.angle)
    this.draw()
  }

  draw() {
    const { x, y, radius, color } = this

    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    ctx.fillStyle = color
    ctx.fill()
  }
}

class Gradient {
  constructor() {
    this.angle = 0
    this.speed = 0.1
  }

  update() {
    this.angle += this.speed
    return this.draw()
  }

  draw() {
    const { angle } = this

    // can use the trig function to make a "pulsating" background gradient
    const gradient = ctx.createRadialGradient(
      canvas.width / 2 + Math.sin(angle),
      canvas.height / 2 + Math.sin(angle),
      50 + Math.sin(angle) * 40,
      canvas.width,
      canvas.height,
      1500 + Math.sin(angle) * 20,
    )
    gradient.addColorStop(0, '#333')
    gradient.addColorStop(1, 'black')

    return gradient
  }
}

const objects = [
  new Planet(50, 0, 'gold'),
  new Planet(1, 70, 'gray'),
  new Planet(6, 120, 'pink'),
  new Planet(5, 200, 'blue'),
]

const gradient = new Gradient()

const animate = () => {
  window.requestAnimationFrame(animate)

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = gradient.update()
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  objects.forEach(obj => obj.update())
}

const onResize = () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

const onMouseMove = ({ clientX, clientY }) => {
  mouse.x = clientX
  mouse.y = clientY
}

window.addEventListener('resize', onResize, true)

animate()

