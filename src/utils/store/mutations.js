import { stateKeys } from './_types'

function setPagesCount(state, payload) {
  state[stateKeys.pagesCount] = payload
  return state
}

function setSheetStyle(state, payload) {
  state[stateKeys.selectedSheetStyle] = payload
  return state
}

export default { setPagesCount, setSheetStyle }
