const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const mouse = { x: 0, y: 0 }

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// converting radians/degrees
const radianToDegree = r => (r * 180) / Math.PI
const degreeToRadian = d => (d * Math.PI) / 180

ctx.translate(0, canvas.height / 2)
ctx.scale(1, -1)

const animate = () => {
  window.requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
    const scale = 100
    const x = angle * scale
    const y = Math.sin(angle) * scale

    ctx.fillRect(x, y, 1, 1)
  }
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

animate()

