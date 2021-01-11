const init = () => {
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }, false)

  const animate = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    window.requestAnimationFrame(animate)
  }

  animate()
}

init()
