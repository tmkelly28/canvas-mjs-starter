const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const mouse = { x: 0, y: 0 }

const width = window.innerWidth
const height = window.innerHeight
canvas.width = width
canvas.height = height

const focalLength = 300

const rand = () => {
  const r = Math.round(Math.random() * 500)
  return r % 2 === 0 ? r : -r
}
const zSort = (c1, c2) => {
  return c1.z > c2.z ? -1 : 1
}

let speed = 0.01
let radius = 200
let centerZ = 10
let baseAngle = 0
const colors = [
  'burlywood',
  'magenta',
  'teal',
  'lime',
  'sienna',
  'indianred',
  'seagreen',
  'darkblue',
  'hotpink'
]
const cards = colors.map((color, index) => {
  const card = {
    x: 0,
    y: 100,
    z: 0,
    color,
    angle: Math.PI * 2 / colors.length * (index + 1),
    height: 100,
    width: 100
  }
  card.z = centerZ + Math.sin(card.angle + baseAngle) * radius
  card.x = Math.cos(card.angle + baseAngle) * radius

  return card
})

context.translate(width / 2, height / 2)

const animate = () => {
  window.requestAnimationFrame(animate)
  baseAngle += speed
  cards.sort(zSort)
  // need to move due to the translation
  context.clearRect(-width / 2, -height / 2, width, height)

  cards.forEach(card => {
    const perspective = focalLength / (focalLength + card.z)

    context.save()
    context.scale(perspective, perspective)
    context.translate(card.x, card.y)
    context.fillStyle = card.color
    context.fillRect(-card.width, -card.height, card.width, card.height)
    context.restore()

    card.x = Math.cos(card.angle + baseAngle) * radius
    card.z = centerZ + Math.sin(card.angle + baseAngle) * radius
  })
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
