export default class World {
  constructor() {
    this.objects = []
    this.state = {
      jumping: false,
      direction: 0,
    }
  }

  dispatch(event) {
    switch (event.type) {
      case 'MOVE_FORWARD':
        this.state.direction = 1
        break
      case 'MOVE_BACKWARD':
        this.state.direction = -1
        break
      case 'JUMP':
        if (!this.state.jumping) {
          this.state.jumping = true
        }
        break
      case 'LAND':
        this.state.jumping = false
        break
      case 'STOP_MOVING':
        this.state.direction = 0
        this.state.jumping = false
        break
    }
  }

  add(...objects) {
    this.objects.push(...objects)
  }

  update() {
    this.objects.forEach(obj => obj.update(this))
  }
}
