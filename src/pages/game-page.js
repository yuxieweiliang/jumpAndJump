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
    this.render()
  }

  render () {
    this.scene.render()
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
