import { actionsKeys } from './_types'

function setPagesCount(context, payload) {
  context.commit(actionsKeys.setPagesCount, payload)
}

function setSheetStyle(context) {
  const selectBoxEl = document.getElementById('select-sheet-style')
  const selectedOption = selectBoxEl[selectBoxEl.selectedIndex].text

  // update paper-sheets dimensions
  const PaperSheetsCollection = document.getElementsByClassName('page')
  for (let PaperSheetEl of PaperSheetsCollection) {
    PaperSheetEl.className = `page ${selectedOption}`
  }
  context.commit(actionsKeys.setSheetStyle, selectedOption)
}

function setSheetsMap(context, payload) {
  context.commit(actionsKeys.setSheetsMap, payload)
}

function setChaptersMap(context, payload) {
  context.commit(actionsKeys.setChaptersMap, payload)
}

export default { setPagesCount, setSheetStyle, setSheetsMap, setChaptersMap }
