import Particle from './particle2.mjs'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const mouse = { x: 0, y: 0 }

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const particle = new Particle(
  {
    x: canvas.width / 2,
    y: canvas.width / 2,
    radius: 10,
    speed: 0,
    direction: Math.PI * Math.random() * 2,
    color: '#cd5c5c',
  }
)

const animate = () => {
  window.requestAnimationFrame(animate)
  context.clearRect(0, 0, canvas.width, canvas.height)

  particle.update(context)
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
window.addEventListener('mousemove', onMouseMove, true)

animate()

