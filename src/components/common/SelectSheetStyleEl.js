import './template-styles/sheet-templates'
import { handleSheetStyle } from './_handlers'

const SelectSheetTemplateEl = document.createElement('select')
SelectSheetTemplateEl.id = 'select-sheet-style'
SelectSheetTemplateEl.onchange = handleSheetStyle

const sheetOptions = ['a3Sheet', 'a4Sheet', 'usLegal', 'usLetter', 'usTablois']

for (let i = 0; i < sheetOptions.length; i++) {
  const option = sheetOptions[i]
  const SheetTemplateOption = document.createElement('option')
  SheetTemplateOption.innerText = option
  SheetTemplateOption.selected = i === 0 ? true : false

  SelectSheetTemplateEl.appendChild(SheetTemplateOption)
}

export default SelectSheetTemplateEl
