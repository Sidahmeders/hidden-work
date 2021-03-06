export default class PubSub {
  constructor() {
    this.events = {}
  }

  subscribe(event, callback) {
    const self = this

    if (!Object.prototype.hasOwnProperty.call(self.events, event)) {
      self.events[event] = []
    }

    return self.events[event].push(callback)
  }

  publish(event, data = {}) {
    let self = this

    if (!Object.prototype.hasOwnProperty.call(self.events, event)) {
      return []
    }

    return self.events[event].map((callback) => callback(data))
  }
}
