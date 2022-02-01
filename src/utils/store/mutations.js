import { stateKeys } from './_types'

function addItem(state, payload) {
  state[stateKeys.items].push(payload)
  return state
}

function clearItem(state, payload) {
  state[stateKeys.items].splice(payload.index, 1)
  return state
}

function setSheetStyle(state, payload) {
  state[stateKeys.selectedSheetStyle] = payload
  return state
}

export default { addItem, clearItem, setSheetStyle }
