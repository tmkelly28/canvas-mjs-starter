import Particle from './particle.mjs'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const mouse = { x: 0, y: 0 }

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const particles = []
for (let i = 0; i < 100; i++) {
  particles.push(
    new Particle(
      canvas.width / 2,
      canvas.height / 2,
      Math.random() * 10,
      Math.PI * Math.random() * 2
    )
  )
}

const animate = () => {
  window.requestAnimationFrame(animate)
  context.clearRect(0, 0, canvas.width, canvas.height)

  particles.forEach(p => p.update(context))
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

