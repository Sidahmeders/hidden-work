import './template-styles/sheet-templates'
import { dispatch, subscriber, _state } from '../../../../utils/store'

const SelectSheetTemplateEl = document.createElement('select')
SelectSheetTemplateEl.id = 'select-sheet-style'
SelectSheetTemplateEl.onchange = dispatch.setSheetStyle

const sheetOptions = ['a3Sheet', 'a4Sheet', 'usLegal', 'usLetter', 'usTablois']

for (let i = 0; i < sheetOptions.length; i++) {
  const option = sheetOptions[i]
  const SheetOptionEl = document.createElement('option')
  SheetOptionEl.innerText = option
  SheetOptionEl.selected = _state.selectedSheetStyle() === option ? true : false

  SelectSheetTemplateEl.appendChild(SheetOptionEl)
}

subscriber('stateChange', updateSheetsStyle)

let count = 1
function updateSheetsStyle(state) {
  const PaperSheetsCollection = document.getElementsByClassName('page')

  console.log('hola', count++)

  for (let PaperSheetEl of PaperSheetsCollection) {
    PaperSheetEl.className = `page ${state.selectedSheetStyle}`
  }
}

export default SelectSheetTemplateEl
