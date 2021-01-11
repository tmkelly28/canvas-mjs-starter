const init = () => {
  const canvas = document.getElementById('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  window.addEventListener('resize', () => {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }, false)

  const animate = () => {
    window.requestAnimationFrame(animate)
  }

  animate()
}

init()
