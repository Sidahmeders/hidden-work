function addItem(state, payload) {
  state.items.push(payload)
  return state
}

function clearItem(state, payload) {
  state.items.splice(payload.index, 1)
  return state
}

function setSheetStyle(state, payload) {
  state.selectedSheetStyle = payload
  return state
}

export default { addItem, clearItem, setSheetStyle }
