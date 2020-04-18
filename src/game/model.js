import Event from '../utils/event'
export default class Model {
  constructor () {
    this.stage = ''
    this.stageChange = new Event(this)
  }

  getStage () {
    return this.stage
  }

  setStage (stage) {
    this.stage = stage
    this.stageChange.notify({
      stage
    })
  }
}
