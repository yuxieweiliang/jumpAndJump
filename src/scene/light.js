import { customAnimation } from '../../libs/animation'

class Light {
  constructor () {
    this.instances = {}
  }

  init () {
    // 环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    // 平行光
    const shadowLight = new THREE.DirectionalLight(0xff00ff, 0.3)
    const shadowLightHelper = new THREE.DirectionalLightHelper(shadowLight, 5)
    // var basicMaterial = new THREE.MeshBasicMaterial({ color: 0xF5F5F5 });
    // this.shadowTarget = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.1), basicMaterial)

    this.shadowLight = shadowLight
    // 斜上方
    shadowLight.position.set(10, 30, 20)
    shadowLight.castShadow = true
    // 在场景中不可见
    // this.shadowTarget.visible = false
    // this.shadowTarget.name = 'shadowTarget'
    // shadowLight.target = this.shadowTarget
    shadowLight.shadow.camera.near = 0.5
    shadowLight.shadow.camera.far = 500
    shadowLight.shadow.camera.left = -100
    shadowLight.shadow.camera.right = 100
    shadowLight.shadow.camera.top = 100
    shadowLight.shadow.camera.bottom = -100
    shadowLight.shadow.mapSize.width = 1024
    shadowLight.shadow.mapSize.height = 1024

    this.instances.shadowLight = shadowLight
    this.instances.ambientLight = ambientLight
    // this.instances.shadowTarget = this.shadowTarget
    this.instances.shadowLightHelper = shadowLightHelper
  }

  updatePosition (targetPosition) {
    customAnimation.to(this.shadowTarget.position, 0.5, {x: targetPosition.x, y: targetPosition.y, z: targetPosition.z})
    customAnimation.to(this.shadowLight.position, 0.5, {x: 10 + targetPosition.x, y: 30 + targetPosition.y, z: 20 + targetPosition.z})
  }

  reset () {
    this.shadowLight.position.set(10, 30, 20)
    this.shadowTarget.position.set(0, 0, 0)
  }
}

export default new Light()
