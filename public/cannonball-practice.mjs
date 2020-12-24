const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const mouse = { x: 0, y: 0 }

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const startingAngle = Math.PI / 6
const startingSpeed = 1000
const startingVelocity = {
  x: Math.sin(startingAngle) * startingSpeed,
  y: Math.cos(startingAngle) * startingSpeed * -1,
}

const gravity = {
  x: 0,
  y: 10,
  accelerate(particle) {
    particle.velocity.x += this.x
    particle.velocity.y += this.y
  }
}

const groundFriction = {
  x: 1,
  y: 0,
  accelerate(particle) {
    if (particle.isInTheAir()) return
    if (particle.stopped()) return

    particle.velocity.x += (this.x * particle.xDirection() * -1)
    particle.velocity.y += this.y
  }
}

const cannonball = {
  x: 100,
  y: canvas.height - 100,
  radius: 100,
  velocity: startingVelocity,
  accelerations: [gravity, groundFriction],

  isInTheAir() {
    return this.y < canvas.height - this.radius
  },

  stopped() {
    return this.velocity.x === 0
  },

  xDirection() {
    return this.velocity.x > 0 ? 1 : -1
  },

  update() {
    // update velocity with accelerations
    this.accelerations.forEach(a => {
      a.accelerate(this)
    })

    // update position
    this.x += this.velocity.x
    this.y += this.velocity.y

    // check collision - every time we collide with a wall, we simulate losing
    // energy by scaling down velocity by 0.9 in the relevant direction
    const xBound = canvas.width - this.radius
    const yBound = canvas.height - this.radius
    if (this.x >= xBound) {
      this.x = xBound
      this.velocity.x *= -0.9
    }
    if (this.y >= yBound) {
      this.y = yBound
      this.velocity.y *= -0.9
    }
    if (this.x <= 0) {
      this.x = this.radius
      this.velocity.x *= -0.9
    }
    if (this.y <= 0) {
      this.y = this.radius
      this.velocity.y *= -0.9
    }

    this.draw()
  },

  draw() {
    context.beginPath()
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    context.fill()
  },
}

const animate = () => {
  window.requestAnimationFrame(animate)
  context.clearRect(0, 0, canvas.width, canvas.height)

  cannonball.update()
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
