import GameView from './view'
import GameModel from './model'

export default class GameController {
  constructor () {
    this.gameView = new GameView()
    this.gameMdel = new GameModel()
    this.gameMdel.stageChange.attach((sender, args) => {
      const stageName = args.stage
      switch (stageName) {
        case 'game-over':
          this.gameView.showGameOverPage()
          break
        case 'game':
          this.gameView.showGamePage()
          break
        default:
            break
      }
    })
  }

  initPages () {
    const gamePageCallbacks = {
      showGameOverPage: this.showGameOverPage.bind(this)
    }

    const gameOverPageCallbacks = {
      gameRestart: this.gameRestart.bind(this)
    }

    this.gameView.initGamePage(gamePageCallbacks)
    this.gameView.initGameOverPage(gameOverPageCallbacks)

    console.log('initGameOverCanvas')
  }

  showGameOverPage () {
    this.gameMdel.setStage('game-over')
  }

  gameRestart () {
    this.gameMdel.setStage('game')
  }
}
