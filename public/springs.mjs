import Vector from './vector.mjs'
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

const spring = new Vector(canvas.width / 2, canvas.height / 2)
const stiffness = 0.02

const animate = () => {
  window.requestAnimationFrame(animate)
  context.clearRect(0, 0, canvas.width, canvas.height)

  const distance = particle.distanceTo(spring)
  const angle = particle.angleTo(spring)
  // f = k * distance
  const force = Vector.fromMagnitudeAndAngle(distance * stiffness, angle)
  particle.accelerate(force)
  particle.applyFriction(0.1)
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

