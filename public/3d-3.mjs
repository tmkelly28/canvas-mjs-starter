const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const mouse = { x: 0, y: 0 }

const width = window.innerWidth
const height = window.innerHeight
canvas.width = width
canvas.height = height

const focalLength = 300

const zSort = (c1, c2) => {
  return c1.z > c2.z ? -1 : 1
}

let z = 500
const points = []
let angle = 0
let drawing = false

context.translate(width / 2, height / 2)

const animate = () => {
  window.requestAnimationFrame(animate)
  // need to move due to the translation
  context.clearRect(-width / 2, -height / 2, width, height)

  context.beginPath()
  points.forEach((point, i) => {
    const perspective = focalLength / (focalLength + point.z)

    context.save()
    context.scale(perspective, perspective)
    context.translate(point.x, point.y)

    if (i) {
      context.lineTo(0, 0)
    } else {
      context.moveTo(point.x, point.y)
    }

    point.z -= 1

    if (point.z < 0) {
      points.splice(i, 1)
    }
    context.restore()
  })
  context.stroke()

  angle += 0.01
}

const onMouseMove = ({ clientX, clientY }) => {
  if (!drawing) return

  const point = {
    x: clientX - (width / 2),
    y: clientY - (height / 2),
    z
  }

  points.push(point)
}

const onMouseDown = () => drawing = true
const onMouseUp = () => drawing = false

const onResize = () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

window.addEventListener('resize', onResize, true)
window.addEventListener('mousedown', onMouseDown, true)
window.addEventListener('mouseup', onMouseUp, true)
window.addEventListener('mousemove', onMouseMove, true)

animate()

