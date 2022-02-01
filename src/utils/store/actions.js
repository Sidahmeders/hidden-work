import { actionsKeys } from './_types'

function addItem(context, payload) {
  context.commit(actionsKeys.addItem, payload)
}

function clearItem(context, payload) {
  context.commit(actionsKeys.clearItem, payload)
}

function setSheetStyle(context) {
  const selectBoxEl = document.getElementById('select-sheet-style')
  const selectedOption = selectBoxEl[selectBoxEl.selectedIndex].text

  context.commit(actionsKeys.setSheetStyle, selectedOption)
}

export default { addItem, clearItem, setSheetStyle }
