/**
 * 游戏主函数
 */
import Game from './game/game'
import GameController from './game/controller'

export default class Main {
  constructor() {
    this.game = new Game()
    this.controller = new GameController()

    console.log(THREE)
    this.restart()
  }

  init () {
    this.game.init()
  }

  restart() {

    canvas.removeEventListener(
      'touchstart',
      this.touchHandler
    )
  }
}
