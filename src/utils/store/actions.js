function addItem(context, payload) {
  context.commit('addItem', payload)
}

function clearItem(context, payload) {
  context.commit('clearItem', payload)
}

function setSheetStyle(context, payload) {
  context.commit('setSheetStyle', payload)
}

export default { addItem, clearItem, setSheetStyle }
