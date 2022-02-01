import AddPageButtonEl from './AddPageButtonEl'
import PageOffsetEl from './PageOffsetEl'
import SelectSheetTemplateEl from './SelectSheetTemplateEl'

const SheetReflowBtnsContainerEl = document.createElement('div')
SheetReflowBtnsContainerEl.id = 'sheet-reflow-container'

SheetReflowBtnsContainerEl.appendChild(SelectSheetTemplateEl)
SheetReflowBtnsContainerEl.appendChild(PageOffsetEl)
SheetReflowBtnsContainerEl.appendChild(AddPageButtonEl)

export default SheetReflowBtnsContainerEl
