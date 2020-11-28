const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const mouse = { x: 0, y: 0 }

canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Arrow {
  constructor() {
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    this.angle = 0
  }

  update() {
    /*  doesn't quite work, because regular
      * atan doesn't know which quadrant you're in
      */
    // this.angle = Math.atan(
    //   (mouse.y - this.y) /
    //   (mouse.x - this.x)
    // )

    /*
      * atan2 just gets the y and x can determine the quadrant
      */
    this.angle = Math.atan2(
      (mouse.y - this.y),
      (mouse.x - this.x)
    )

    this.draw()
  }

  draw() {
    const { x, y, angle } = this

    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(angle)

    ctx.beginPath()
    ctx.moveTo(20, 0)
    ctx.lineTo(-20, 0)
    ctx.moveTo(20, 0)
    ctx.lineTo(10, -10)
    ctx.moveTo(20, 0)
    ctx.lineTo(10, 10)
    ctx.stroke()

    ctx.restore()
  }
}

const arrow = new Arrow()

const animate = () => {
  window.requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  arrow.update()
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

