import Store from './store.js'
import actions from './actions.js'
import mutations from './mutations.js'
import state from './state.js'
import { actionsKeys } from './_types.js'

const store = new Store({
  actions,
  mutations,
  state,
})

const dispatch = {
  setPagesCount: (payload) => store.dispatch(actionsKeys.setPagesCount, payload),
  setSheetStyle: (payload) => store.dispatch(actionsKeys.setSheetStyle, payload),
}

const subscriber = (event, callback) => {
  store.events.subscribe(event, callback || function () {})
}

export { dispatch, subscriber }
