import { actionsKeys } from './types'

function addItem(context, payload) {
  context.commit(actionsKeys.addItem, payload)
}

function clearItem(context, payload) {
  context.commit(actionsKeys.clearItem, payload)
}

function setSheetStyle(context, payload) {
  context.commit(actionsKeys.setSheetStyle, payload)
}

export default { addItem, clearItem, setSheetStyle }
