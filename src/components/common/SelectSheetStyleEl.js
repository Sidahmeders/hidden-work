import '../PaperSheet/template-styles/sheet-templates'
import { handleSheetStyle, createSheetOptionsElement } from './_handlers'

const SelectSheetTemplateEl = document.createElement('select')
SelectSheetTemplateEl.className = 'select-sheet-style'
SelectSheetTemplateEl.onchange = handleSheetStyle

createSheetOptionsElement(SelectSheetTemplateEl)

export default SelectSheetTemplateEl
