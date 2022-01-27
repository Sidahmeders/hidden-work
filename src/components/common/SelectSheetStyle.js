import '../PaperSheet/template-styles/sheet-templates'
import { sheetOptions } from './_state'
import { handleSheetStyle } from './_handlers'

const SelectSheetTemplateEl = document.createElement('select')
SelectSheetTemplateEl.className = 'select-sheet-style'
SelectSheetTemplateEl.onchange = handleSheetStyle

for (let i = 0; i < sheetOptions.length; i++) {
  const option = sheetOptions[i]
  const SheetTemplateOption = document.createElement('option')
  SheetTemplateOption.innerText = option
  SheetTemplateOption.selected = i === 0 ? true : false

  SelectSheetTemplateEl.appendChild(SheetTemplateOption)
}

export default SelectSheetTemplateEl
