import PubSub from '../lib/pubsub.js'

export default class Store {
  constructor(params) {
    let self = this

    self.proxyTrap = {
      set: function (state, key, value) {
        state[key] = value
        console.log(`stateChange: ${key}: ${value}`)
        self.events.publish('stateChange', self.state)

        if (self.status !== 'mutation') {
          console.warn(`You should use a mutation to set ${key}`)
        }
        self.status = 'resting'

        return true
      },
    }

    self.state = new Proxy(params.state || {}, self.proxyTrap)
    self.events = new PubSub()
    self.actions = {}
    self.mutations = {}
    self.status = 'resting'

    if (Object.prototype.hasOwnProperty.call(params, 'actions')) {
      self.actions = params.actions
    }

    if (Object.prototype.hasOwnProperty.call(params, 'mutations')) {
      self.mutations = params.mutations
    }
  }

  dispatch(actionKey, payload) {
    let self = this

    if (typeof self.actions[actionKey] !== 'function') {
      console.error(`Action "${actionKey} doesn't exist.`)
      return false
    }

    console.groupCollapsed(`ACTION: ${actionKey}`)
    self.status = 'action'
    self.actions[actionKey](self, payload)
    console.groupEnd()

    return true
  }

  commit(mutationKey, payload) {
    let self = this

    if (typeof self.mutations[mutationKey] !== 'function') {
      console.log(`Mutation "${mutationKey}" doesn't exist`)
      return false
    }

    self.status = 'mutation'
    let newState = self.mutations[mutationKey](self.state, payload)
    self.state = Object.assign(self.state, newState)
    localStorage.setItem('state', JSON.stringify(self.state))

    return true
  }
}
