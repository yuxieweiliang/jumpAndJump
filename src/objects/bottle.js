import utils from '../utils/index'
import bottleConf from '../../confs/bottle-conf'
import blockConf from '../../confs/block-conf'
import gameConf from '../../confs/game-conf'
import { customAnimation } from '../../libs/animation'

class Bottle_push {
  constructor () {
    this.status = 'stop'
    this.velocity = {
      vx: 0, // 水平方向速度
      vy: 0 //竖直方向速度
    }
    this.flyingTime = 0
    this.direction = 0
    this.scale = 1
  }

  init () {
    this.loader = new THREE.TextureLoader()
    this.obj = new THREE.Object3D()
    this.obj.name = 'bottle'
    this.obj.position.set(bottleConf.initPosition.x, bottleConf.initPosition.y + 30, bottleConf.initPosition.z)

    this.bottle = new THREE.Object3D()
    var basicMaterial = new THREE.MeshBasicMaterial({ color: 0x800080 })
    var basicMaterial2 = new THREE.MeshBasicMaterial({ color: 0xffffff })

    var headRadius = 2.1 * 0.72
    this.human = new THREE.Object3D()
    this.head = new THREE.Mesh(new THREE.OctahedronGeometry(headRadius * 1.4), basicMaterial)
    this.head.castShadow = true
    this.bottom = new THREE.Mesh(
      new THREE.CylinderGeometry(0.88 * headRadius, 1.27 * headRadius, 2.68 * headRadius, 20),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    )
    this.bottom.rotation.y = 4.7
    this.bottom.castShadow = true
    var middleGeometry = new THREE.CylinderGeometry(headRadius, 0.88 * headRadius, 1.2 * headRadius, 20)
    var middleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
    var materials = [middleMaterial, basicMaterial2]
    var totalGeometry = new THREE.Geometry()
    middleGeometry.rotateY(4.7)
    utils.merge(totalGeometry, middleGeometry, 0, [{ x: 0, y: this.bottom.position.y + 1.94 * headRadius, z: 0 }])
    var topGeometry = new THREE.SphereGeometry(headRadius, 20, 20)
    topGeometry.scale(1, 0.54, 1)
    utils.merge(totalGeometry, topGeometry, 1, [{ x: 0, y: this.bottom.position.y + 2.54 * headRadius, z: 0 }])
    this.middle = new THREE.Mesh(totalGeometry, materials)
    this.middle.castShadow = true
    this.body = new THREE.Object3D()
    this.body.add(this.bottom)
    this.body.add(this.middle)
    this.human.add(this.body)
    this.head.position.y = 7.56
    this.head.position.x = 0
    this.head.position.z = 0
    this.human.add(this.head)
    this.bottle.add(this.human)

    this.bottle.position.y = 2.3
    this.bottle.position.x = 0
    this.bottle.position.z = 0
    this.obj.add(this.bottle)
  }

  // 头部旋转
  update () {
    this.head.rotation.y += 0.06
  }

  showUp () {
    customAnimation.to(this.obj.position, 0.5, {
      x: bottleConf.initPosition.x,
      y: bottleConf.initPosition.y + 5,
      z: bottleConf.initPosition.z
    }, 'Bounce.easeInOut')
  }

  setDirection (direction, axis) {
    this.direction = direction
    this.axis = axis
  }

  rotate () {
    if (this.direction === 0) {
      customAnimation.to(this.human.rotation, 0.14, {z: this.human.rotation.z - 180})
      customAnimation.to(this.human.rotation, 0.18, {z: this.human.rotation.z - 2 * Math.PI}, 'Linear', 0.14)
    } else if (this.direction === 1) {

    }
  }
}

export default new Bottle_push()

