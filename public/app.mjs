import World from './world.mjs'
import Circle from './circle.mjs'

const init = () => {
  const canvas = document.getElementById('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const world = new World(canvas)
  const circle = new Circle({
    x: 10,
    y: canvas.height / 2,
    radius: 10,
    color: 'burlywood',
  })

  world.add(circle)

  window.addEventListener('resize', () => world.resize(), true)
  window.addEventListener('mousemove', ({ clientX, clientY }) => {
    world.updateMouse(clientX, clientY)
  }, false)
  window.world = world

  const animate = () => {
    window.requestAnimationFrame(animate)
    world.update()
  }

  animate()
}

init()
