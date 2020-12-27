const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = window.innerWidth
const height = window.innerHeight
canvas.width = width
canvas.height = height

const focalLength = 300
const points = []
const numPoints = 200
const centerZ = 2000
const radius = 1000
let baseAngle = 0
let rotationSpeed = 0.01

for (let i = 0; i < numPoints; i++) {
  const angle = 0.2 * i
  points.push({
    angle,
    y: 2000 - 4000 / numPoints * i,
    x: Math.cos(angle + baseAngle) * radius,
    z: centerZ + Math.sin(angle + baseAngle) * radius
  })
}

context.translate(width / 2, height / 2)

const animate = () => {
  window.requestAnimationFrame(animate)
  baseAngle += rotationSpeed
  context.clearRect(-width / 2, -height / 2, width, height)

  context.beginPath()
  points.forEach((point, i) => {
    const perspective = focalLength / (focalLength + point.z)

    context.save()
    context.scale(perspective, perspective)
    context.translate(point.x, point.y)

    // "hack" to get the discs flipping around
    // context.scale(Math.sin(point.angle + baseAngle), 1)

    !i ? context.moveTo(0, 0) : context.lineTo(0, 0)
    // context.beginPath()
    // context.arc(0, 0, 40, 0, Math.PI * 2, false)
    // context.fill()

    context.restore()

    point.x = Math.cos(point.angle + baseAngle) * radius
    point.z = centerZ + Math.sin(point.angle + baseAngle) * radius
  })
  context.stroke()
}

const onResize = () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

window.addEventListener('resize', onResize, true)

animate()
