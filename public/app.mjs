import World from './world.mjs'
import Circle from './circle.mjs'
import Rect from './rect.mjs'

const init = () => {
  const canvas = document.getElementById('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const world = new World(canvas)
  const circle = new Circle({ x: 50, y: 50, radius: 50, color: 'blue' })
  const rect = new Rect({ x: 150, y: 150, height: 25, width: 25, color: 'green' })
  world.add(circle, rect)

  window.addEventListener('resize', () => world.resize(), true)
  window.world = world

  const animate = () => {
    window.requestAnimationFrame(animate)
    world.update()
  }

  animate()
}

init()
