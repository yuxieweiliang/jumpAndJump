class Model {
  constructor () {
  }

  init () {
    this.renderer = new THREE.WebGLRenderer({ canvas })
    this.camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, -1000, 1000)
    this.scene = new THREE.Scene()
  }

  instance (mesh) {
    this.scene.add(mesh)
  }

  animate () {
    let currentAngle = 0
    let lastTimestamp = Date.now()
    const now = Date.now()
    const duration = now - lastTimestamp
    lastTimestamp = now
    currentAngle = currentAngle + duration / 1000 * Math.PI
  }
  render (stage) {
    // this.animate()
    this.mesh.rotation.set(0, currentAngle, 0)
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this))
  }
}

export default new Model()
