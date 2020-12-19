import Grid from './grid.mjs'
import Vector from './vector.mjs'

const init = () => {
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')
  canvas.width = 720
  canvas.height = 720

  const mouse = { x: 0, y: 0 }
  const step = 20
  const origin = { x: canvas.width / 2, y: canvas.height / 2 }
  const grid = new Grid(canvas.height, canvas.width, step)
  const v1 = new Vector(1, 3, origin, step, 'mediumvioletred')
  const v2 = new Vector(-4, 3, origin, step, 'cyan')
  const v3 = new Vector(-5, -2, origin, step, 'crimson')
  const v4 = new Vector(5, -2, origin, step, 'burlywood')

  window.addEventListener('mousemove', ({ clientX, clientY }) => {
    mouse.x = clientX
    mouse.y = clientY
  }, false)

  const animate = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    grid.update(context)
    v1.update(context)
    v2.update(context)
    v3.update(context)
    v4.update(context)

    window.requestAnimationFrame(animate)
  }

  animate()
}

init()
