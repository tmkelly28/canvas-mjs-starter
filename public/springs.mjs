import Vector from './vector.mjs'
import Particle from './particle2.mjs'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
const mouse = { x: canvas.width / 2, y: canvas.height / 2 }

const particle = new Particle(
  {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 0,
    direction: Math.PI * Math.random() * 2,
    color: '#cd5c5c',
  }
)

const spring = new Vector(canvas.width / 2, canvas.height / 2)
const springLength = 100
const stiffness = 0.02

// Hooke's law
// f = kX
// force = stiffness * distance
const animate = () => {
  window.requestAnimationFrame(animate)
  context.clearRect(0, 0, canvas.width, canvas.height)

  // from the video:
  // not really distance, but a vector pointing from the particle to the springpoint
  const distanceVector = spring.subtract(particle.position)
  distanceVector.magnitude = distanceVector.magnitude - springLength
  const force = distanceVector.scalarMultiply(stiffness)

  // what I initially came up with:
  // This is equivalent when the spring is just to a point, but doesn't really work with spring length, 
  // because rather than calculating the distance/angle to the spring's origin, it needs to be to the spring's offset
  // const distance = particle.distanceTo(_s)
  // const angle = particle.angleTo(_s)
  // const force = Vector.fromMagnitudeAndAngle(distance * stiffness, angle)
  particle.accelerate(force)

  particle.applyFriction(0.2)
  particle.update(context)

  spring.x = mouse.x
  spring.y = mouse.y
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

