const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const mouse = { x: 0, y: 0 }

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let x = canvas.width / 2
let y = canvas.height / 2
let alpha = 0.5
let radius = 40
let speed = 0.1
let angle = 0
let offset = 10

const drawCircle = () => {
  // radius += Math.sin(angle)

  /*
    * using a constant base value of 0.5 - alpha only means something between 0 and 1
    */
  // alpha = 0.5 + Math.sin(angle)


  /*
    * spins counterclockwise (is clockwise when reversed)
    */
  // x += Math.sin(angle) * offset
  // y += Math.cos(angle) * offset

  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2, false)
  ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`
  ctx.fill()

  angle += speed
}

const animate = () => {
  window.requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawCircle()
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
window.addEventListener('mousemove', onMouseMove, true)

animate()
