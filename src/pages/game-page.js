import { scene } from '../scene/index'
import CuboidBlock from '../block/cuboid'
import CylinderBlock from '../block/cylinder'
import ground from '../objects/ground'
import bottle from '../objects/bottle'

export default class GamePage {
  constructor () {}

  init () {
    this.scene = scene
    this.bottle = bottle
    this.ground = ground
    this.scene.init()
    this.bottle.init()
    this.ground.init()
    this.addInitBlock()
    this.addGround()
    this.addBottle()
    this.bindTouchEvent()
    this.render()
  }

  bindTouchEvent () {
    canvas.addEventListener('touchstart', this.touchStart)
    canvas.addEventListener('touchend', this.touchEnd)
  }

  removeTouchEvent () {
    canvas.removeEventListener('touchstart', this.touchStart)
    canvas.removeEventListener('touchend', this.touchEnd)
  }

  touchStart () {
    console.log('touch start callback')
  }

  touchEnd () {
    console.log('touch end callback')
  }

  render () {
    this.scene.render()
    if (this.bottle) {
      this.bottle.update()
    }
    requestAnimationFrame(this.render.bind(this))
  }
  addInitBlock () {
    const cuboidBlock = new CuboidBlock(-15, 0, 0)
    const cylinderBlock = new CylinderBlock(23, 0, 0)

    this.scene.instance.add(cuboidBlock.instance)
    this.scene.instance.add(cylinderBlock.instance)
  }
  addGround () {
    this.scene.instance.add(this.ground.instance)
  }

  addBottle () {
    console.log('game bottle restart')
    this.scene.instance.add(this.bottle.obj)
    this.bottle.showUp()
  }
  restart () {
    console.log('game page restart')
  }

  show () {
    this.mesh.visible = true
    console.log('game over page show')
  }

  hide () {
    this.mesh.visible = false
  }
}
