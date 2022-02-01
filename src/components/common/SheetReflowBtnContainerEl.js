import AddPageButtonEl from './AddPageButtonEl'
import PageOffsetEl from './PageOffsetEl'
import SelectSheetTemplateEl from './SelectSheetTemplateEl'

const SheetReflowBtnContainerEl = document.createElement('div')
SheetReflowBtnContainerEl.id = 'sheet-reflow-container'

SheetReflowBtnContainerEl.appendChild(SelectSheetTemplateEl)
SheetReflowBtnContainerEl.appendChild(PageOffsetEl)
SheetReflowBtnContainerEl.appendChild(AddPageButtonEl)

export default SheetReflowBtnContainerEl
