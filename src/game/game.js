import GameController from './controller'

export default class Game {
  constructor() {
    console.log(THREE)
    this.gameController = new GameController()
  }

  init () {
    this.gameController.initPages()
  }

}
