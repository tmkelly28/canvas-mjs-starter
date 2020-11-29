import Planet from './particle2.mjs'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const mouse = { x: 0, y: 0 }

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const sun = new Planet({
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 50,
  speed: 0,
  direction: 0,
  color: 'gold',
  mass: 2000,
})

const earth = new Planet({
  x: canvas.width / 2 + 300,
  y: canvas.height / 2,
  radius: 10,
  speed: 2,
  direction: Math.PI / 2,
  color: 'blue',
  mass: 1,
})


const animate = () => {
  window.requestAnimationFrame(animate)
  context.clearRect(0, 0, canvas.width, canvas.height)

  earth.gravitateTo(sun)
  sun.update(context)
  earth.update(context)
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

