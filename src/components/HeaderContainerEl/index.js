import './_styles.scss'
import state from '../../utils/store/state'
import Store from '../../utils/store/store'

import TextEditorMarkers from './TextEditorMarkers'
import AddPageButton from './AddPageButton'
import PageOffset from './PageOffset'
import SelectSheetTemplate from './SelectSheetTemplate'

const HeaderContainer = document.getElementById('header-container')
const TextEditorMarkersInstance = new TextEditorMarkers(Store, state, HeaderContainer)
const SheetReflowBtnsContainer = document.createElement('div')
SheetReflowBtnsContainer.id = 'sheet-reflow-container'
HeaderContainer.appendChild(SheetReflowBtnsContainer)

const SelectSheetTemplateInstance = new SelectSheetTemplate(Store, state, SheetReflowBtnsContainer)
const PageOffsetInstance = new PageOffset(Store, state, SheetReflowBtnsContainer)
const AddPageButtonInstance = new AddPageButton(Store, state, SheetReflowBtnsContainer)

TextEditorMarkersInstance.render()
SelectSheetTemplateInstance.render()
PageOffsetInstance.render()
AddPageButtonInstance.render()
