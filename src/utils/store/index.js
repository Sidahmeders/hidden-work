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
  setSheetStyle: () => store.dispatch(actionsKeys.setSheetStyle),
  setPagesCount: (payload) => store.dispatch(actionsKeys.setPagesCount, payload),
  setSheetsMap: (payload) => store.dispatch(actionsKeys.setSheetsMap, payload),
  setChaptersMap: (payload) => store.dispatch(actionsKeys.setChaptersMap, payload),
}

export { store, dispatch, state }
