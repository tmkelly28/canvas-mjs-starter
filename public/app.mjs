import Grid from './grid.mjs'
import Vector from './vector.mjs'
import Matrix from './matrix.mjs'
import { randomColor } from './utils.mjs'

const init = () => {
  const mouse = { x: 0, y: 0 }
  const step = 20

  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')
  canvas.width = 920
  canvas.height = 920

  const origin = { x: canvas.width / 2, y: canvas.height / 2 }

  const vector = (x, y, color) => new Vector(x, y, color, origin, step)

  const grid = new Grid(canvas.height, canvas.width, step)
  const i = vector(1, 0, 'mediumvioletred')
  const j = vector(0, 1, 'cyan')

  // vector [6, -2]
  const k = i.scalarMult(6).add(j.scalarMult(-2))
  k.color = randomColor()

  // applies a 90deg rotation
  const m = new Matrix([0, 1], [-1, 0])
  const l = m.applyTransformation(k)

  window.addEventListener('mousemove', ({ clientX, clientY }) => {
    mouse.x = clientX
    mouse.y = clientY
  }, false)

  const animate = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    grid.update(context)
    k.update(context)
    l.update(context)

    window.requestAnimationFrame(animate)
  }

  animate()
}

init()
