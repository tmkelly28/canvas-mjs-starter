import World from './world.mjs'

const init = () => {
  const canvas = document.getElementById('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const world = new World(canvas)

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
