import { subscriber, _state } from '../utils/store'

subscriber(null, updateSheetsStyle)

function updateSheetsStyle() {
  const PaperSheetsCollection = document.getElementsByClassName('page')

  for (let PaperSheetEl of PaperSheetsCollection) {
    PaperSheetEl.className = `page ${_state.selectedSheetStyle()}`
  }
}
