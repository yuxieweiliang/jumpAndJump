export default class GameOverPage {
  constructor ({ scene }) {
    this.scene = scene
  }

  init (callbacks) {
    this.callbacks = callbacks
    this.initGameOverCanvas()
  }

  initGameOverCanvas () {
    const aspest = window.innerHeight / window.innerWidth
    this.canvas = document.createElement('canvas')

    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight

    this.texture = new THREE.Texture(this.canvas)
    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
      side: THREE.DoubleSide
    })

    this.geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight)
    this.obj = new THREE.Mesh(this.geometry, this.material)
    this.obj.position.z = 1
    this.obj.rotation.y = Math.PI
    this.obj.visible = false
    this.context = this.canvas.getContext('2d')
    this.context.fillStyle = '#333'
    this.context.fillRect((window.innerWidth - 200) / 2,(window.innerHeight - 100) / 2, 200, 100)
    this.context.fillStyle = '#eee'
    this.context.font = '20px Georgia'
    this.context.fillText('Game Over', (window.innerWidth - 200) / 2 + 50,(window.innerHeight - 100) / 2 + 55)
    this.texture.needsUpdate = true
    this.scene.instance.add(this.obj)
  }

  show () {
    this.obj.visible = true
    console.log('game over page show')
  }

  hide () {
    this.obj.visible = false
  }
}
