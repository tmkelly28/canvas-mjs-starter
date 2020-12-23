const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const mouse = { x: 0, y: 0 }

const width = window.innerWidth
const height = window.innerHeight
canvas.width = width
canvas.height = height

// |-----|
// |     |__
// |     |  |               <(^^)>
// |     |__|
// |     |
// |-----|
//    fl 
//        <--------------------->
//                    z
//
// perspective = focalLength / (focalLength + z)
//  ex. say you have a focalLength of 300
//  If you have a 100x100 square that's supposed to
//  be 200 units away (on the z axis), then:
//  300 / (300 + 200) = 3/5 = 0.6
//  So, to simulate the 100x100 square being at that distance,
//  we scale it by 0.6 (60x60)
const focalLength = 300
const position = {
  x: 500,
  y: 300,
  z: 500
}

// move our origin (0,0) to the center of the screen
// -> this is our vanishing point
//
// We want our coordinates to be such that the middle of the screen
// is 0, 0, 0 
// x will descrease to the left, increase to the right.
// y will increase down, decrease up (regular "canvas" direction)
// z will increase further towards the vanishing point, and decrease as we
//   get closer to the "viewer" outside the screen
context.translate(width / 2, height / 2)

const animate = () => {
  window.requestAnimationFrame(animate)
  // need to move due to the translation
  context.clearRect(-width / 2, -height / 2, width, height)

  const perspective = focalLength / (focalLength + position.z)
  context.save()
  // translate to the x,y position of the shape
  // Remember that translate sets to the new 0,0 position of the canvas to be the two arguments
  // All subsequent coordinates are relative to that 0,0 until the context is restores
  context.translate(position.x * perspective, position.y * perspective)
  context.scale(perspective, perspective)

  // optimization - instead, scale first, then translate. The scaling already performs
  // the multiplcation for you, essentially
  //
  // context.scale(perspective, perspective)
  // context.translate(position.x, position.y)

  context.fillRect(-100, -100, 200, 200)
  context.restore()

  position.z -= 5
  if (position.z <= 0) {
    position.z = 500
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
window.addEventListener('mousemove', onMouseMove, true)

animate()
