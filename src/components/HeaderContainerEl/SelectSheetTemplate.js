import './template-styles/sheet-templates'
import { dispatch, state } from '../../utils/store'

function SelectSheetTemplate(parent) {
  const element = document.createElement('select')
  element.id = 'select-sheet-style'
  element.onchange = dispatch.setSheetStyle

  const sheetOptions = ['a3Sheet', 'a4Sheet', 'usLegal', 'usLetter', 'usTablois']

  for (let i = 0; i < sheetOptions.length; i++) {
    const option = sheetOptions[i]
    const SheetOptionEl = document.createElement('option')
    SheetOptionEl.innerText = option
    SheetOptionEl.selected = state.selectedSheetStyle === option ? true : false

    element.appendChild(SheetOptionEl)
    parent.appendChild(element)
  }
}

export default SelectSheetTemplate
