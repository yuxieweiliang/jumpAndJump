function createShape(callbacks) {

  this.callbacks = callbacks
  console.log('game page init')
  const width = window.innerWidth
  const height = window.innerHeight
  const renderer = new THREE.WebGLRenderer({ canvas })
  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, -1000, 1000)
  const axesHelper = new THREE.AxesHelper(100)
  scene.add(axesHelper)

  this.scene = scene
  renderer.setClearColor(new THREE.Color(0x000000))
  renderer.setSize(width, height)

  const triangleShape = new THREE.Shape()
  triangleShape.moveTo(0, 100)
  triangleShape.lineTo(-100, -100)
  triangleShape.lineTo(100, -100)
  triangleShape.lineTo(0, 100)

  const geometry = new THREE.ShapeGeometry(triangleShape)
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    side: THREE.DoubleSide
  })

  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.x = 0
  mesh.position.y = 0
  mesh.position.z = 0
  this.mesh = mesh
  scene.add(mesh)

  camera.position.set(0, 0, 0)
  camera.lookAt(new THREE.Vector3(0, 0, 1))

  let currentAngle = 0
  let lastTimestamp = Date.now()
  // document.body.append(renderer.domElement);
  const animate = function () {
    const now = Date.now()
    const duration = now - lastTimestamp
    lastTimestamp = now
    currentAngle = currentAngle + duration / 1000 * Math.PI
  }

  const render = function () {
    animate()
    mesh.rotation.set(0, currentAngle, 0)
    renderer.render(scene, camera);
    window.requestAnimationFrame(render, canvas)
  }
  render()

  setTimeout(callbacks.showGameOverPage, 2000)
}
