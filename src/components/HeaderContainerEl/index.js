import './_styles.scss'
import TextEditorMarkers from './TextEditorMarkers'

import AddPageButton from './SheetReflowBtnsContainer/AddPageButton'
import PageOffset from './SheetReflowBtnsContainer/PageOffset'
import SelectSheetTemplate from './SheetReflowBtnsContainer/SelectSheetTemplate'

const HeaderContainer = document.getElementById('header-container')
const SheetReflowBtnsContainer = document.createElement('div')
SheetReflowBtnsContainer.id = 'sheet-reflow-container'

HeaderContainer.appendChild(TextEditorMarkers)
HeaderContainer.appendChild(SheetReflowBtnsContainer)

const SelectSheetTemplateInstance = new SelectSheetTemplate()
const PageOffsetInstance = new PageOffset()
const AddPageButtonInstance = new AddPageButton()

SelectSheetTemplateInstance.render()
PageOffsetInstance.render()
AddPageButtonInstance.render()
