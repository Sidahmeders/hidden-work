import Store from './store.js'
import actions from './actions.js'
import mutations from './mutations.js'
import state from './state.js'
import { actionsKeys, stateKeys } from './_types.js'

const store = new Store({
  actions,
  mutations,
  state,
})

const dispatch = {
  addItem: (payload) => store.dispatch(actionsKeys.addItem, payload),
  clearItem: (payload) => store.dispatch(actionsKeys.clearItem, payload),
  setSheetStyle: (payload) => store.dispatch(actionsKeys.setSheetStyle, payload),
}

const _state = {
  items: () => store.state[stateKeys.items],
  selectedSheetStyle: () => store.state[stateKeys.selectedSheetStyle],
}

const subscriber = (event, callback) => {
  store.events.subscribe(event, callback || function () {})
}

export { dispatch, _state, subscriber }
