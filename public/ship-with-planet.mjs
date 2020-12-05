import Vector from './vector.mjs'
import Ship from './ship.mjs'
import Planet from './particle2.mjs'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const mouse = { x: 0, y: 0 }

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ship = new Ship(200, 200, 0, 0, 0)
let thrust = new Vector(0, 0)

const sun = new Planet({
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 300,
  speed: 0,
  direction: 0,
  color: 'blue',
  mass: 5000,
})

const animate = () => {
  window.requestAnimationFrame(animate)
  context.clearRect(0, 0, canvas.width, canvas.height)

  if (!ship.landed) {
    ship.gravitateTo(sun)
    ship.applyFriction(0.01)
    ship.accelerate(thrust)
  }
  ship.update(context)
  sun.update(context)

  if (ship.x < 0) {
    ship.x = canvas.width
  } else if (ship.x > canvas.width) {
    ship.x = 0
  }

  if (ship.y < 0) {
    ship.y = canvas.height
  } else if (ship.y > canvas.height) {
    ship.y = 0
  }

  if (ship.distanceTo(sun.position) - 11 <= sun.radius) {
    ship.halt()
  }
}

const onResize = () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

const onMouseMove = ({ clientX, clientY }) => {
  mouse.x = clientX
  mouse.y = clientY
}

const onKeyDown = ({ keyCode }) => {
  switch(keyCode) {
    case 37:
      ship.rotate(-0.1)
      break
    case 38:
      thrust.angle = ship.angle
      thrust.magnitude = 0.3
      ship.isThrusting = true
      ship.isLanded = false
      break
    case 39:
      ship.rotate(0.1)
      break
  }
}

const onKeyUp = ({ keyCode }) => {
  if (keyCode === 38) {
    thrust = new Vector(0, 0)
    ship.isThrusting = false
  }
}

window.addEventListener('resize', onResize, true)
window.addEventListener('mousemove', onMouseMove, true)
window.addEventListener('keydown', onKeyDown, true)
window.addEventListener('keyup', onKeyUp, true)

animate()

