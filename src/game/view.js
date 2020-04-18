import GamePage from '../pages/game-page'
import GameOverPage from '../pages/game-over-page'
class GameView {
  constructor() {}

  initGamePage (callbacks) {
    this.gamePage = new GamePage()
    this.gamePage.init(callbacks)
  }

  initGameOverPage (callbacks) {
    this.gameOverPage = new GameOverPage({
      scene: this.gamePage.scene
    })
    this.gameOverPage.init(callbacks)
  }

  showGamePage () {
    this.gameOverPage.hide()
    this.gamePage.restart()
    this.gamePage.show()
  }

  gameRestart () {
    this.gamePage.restart()
  }

  showGameOverPage () {
    this.gamePage.hide()
    this.gameOverPage.show()
  }
}

export default GameView
