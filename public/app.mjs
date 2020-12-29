const init = () => {
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')

  canvas.width = 500
  canvas.height = 500

  const camera = {
    x: 5, y: 5
  }

  window.addEventListener('keydown', ({ code }) => {
    switch(code) {
      case 'KeyA':
        camera.x += 5
        break
      case 'KeyW':
        camera.y += 5
        break
      case 'KeyD':
        camera.x -= 5
        break
      case 'KeyS':
        camera.y -= 5
        break
    }
  })

  const animate = () => {
    context.setTransform(1, 0, 0, 1, 0, 0)
    context.clearRect(0, 0, canvas.width, canvas.height)

    context.translate(camera.x, camera.y)

    context.beginPath()
    context.arc(500, 500, 100, 0, Math.PI * 2, false)
    context.closePath()
    context.fill()

    window.requestAnimationFrame(animate)
  }

  animate()
}

init()
