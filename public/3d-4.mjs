const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const mouse = { x: 0, y: 0 }

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const focalLenth = 300
const points = []

context.translate(canvas.width / 2, canvas.height / 2)

points[0] = { x: -500, y: -500, z: 1000 }
points[1] = { x: 500, y: -500, z: 1000 }
points[2] = { x: 500, y: -500, z: 500 }
points[3] = { x: -500, y: -500, z: 500 }
points[4] = { x: -500, y: 500, z: 1000 }
points[5] = { x: 500, y: 500, z: 1000 }
points[6] = { x: 500, y: 500, z: 500 }
points[7] = { x: -500, y: 500, z: 500 }

const project = () => {
  points.forEach(point => {
    const scale = focalLenth / (focalLenth + point.z)

    // sx, sy = screen-x and screen-y
    point.sx = point.x * scale
    point.sy = point.y * scale
  })
}

const drawLine = (...indices) => {
  const [first, ...rest] = indices

  context.beginPath()
  context.moveTo(points[first].sx, points[first].sy)
  rest.forEach(index => {
    context.lineTo(points[index].sx, points[index].sy)
  })
  context.stroke()
}

const translateModel = (x, y, z) => {
  points.forEach(point => {
    point.x += x
    point.y += y
    point.z += z
  })
}

const animate = () => {
  context.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
  project()

  drawLine(0, 1, 2, 3, 0)
  drawLine(4, 5, 6, 7, 4)
  drawLine(0, 4)
  drawLine(1, 5)
  drawLine(2, 6)
  drawLine(3, 7)

  window.requestAnimationFrame(animate)
}

const onResize = () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

const onMouseMove = ({ clientX, clientY }) => {
  mouse.x = clientX
  mouse.y = clientY
}

const onKeyDown = ({ keyCode, shiftKey }) => {
  switch(keyCode) {
    case 37:
      translateModel(-20, 0, 0)
      break
  }
  switch(keyCode) {
    case 38:
      shiftKey ? translateModel(0, 0, 20) : translateModel(0, -20, 0)
      break
  }
  switch(keyCode) {
    case 39:
      translateModel(20, 0, 0)
      break
  }
  switch(keyCode) {
    case 40:
      shiftKey ? translateModel(0, 0, -20) : translateModel(0, 20, 0)
      break
  }
}

window.addEventListener('resize', onResize, true)
window.addEventListener('mousemove', onMouseMove, true)
window.addEventListener('keydown', onKeyDown, false)

animate()

