import { canvas, ctx } from './canvas.mjs'
import Ball from './ball.mjs'
import Slime from './slime.mjs'
import World from './world.mjs'

const world = new World()
const ball = new Ball({ x: 50, y: 50, radius: 25, color: 'blue', ctx })
const slime = new Slime({ x: 150, y: window.innerHeight, color: 'green', ctx })
world.add(ball, slime)

const animate = () => {
  window.requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  world.update()
}

const onResize = () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

const KEYS = {
  D: 68,
  A: 65,
  W: 87,
}

const onKeydown = ({ keyCode }) => {
  switch (keyCode) {
    case KEYS.D:
      world.dispatch({ type: 'MOVE_FORWARD' })
      break
    case KEYS.A:
      world.dispatch({ type: 'MOVE_BACKWARD' })
      break
    case KEYS.W:
      world.dispatch({ type: 'JUMP' })
      break
  }
}

const onKeyup = ({ keyCode }) => {
  switch (keyCode) {
    case KEYS.D:
    case KEYS.A:
      world.dispatch({ type: 'STOP_MOVING' })
      break
  }
}

window.addEventListener('resize', onResize, true)
window.addEventListener('keydown', onKeydown, true)
window.addEventListener('keyup', onKeyup, true)

animate()
