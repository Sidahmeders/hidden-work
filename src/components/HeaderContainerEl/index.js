import './_styles.scss'
import { store } from '../../utils/store'

import TextEditorMarkers from './TextEditorMarkers'
import AddPageButton from './AddPageButton'
import PageOffset from './PageOffset'
import SelectSheetTemplate from './SelectSheetTemplate'

const HeaderContainer = document.getElementById('header-container')

const TextEditorMarkersInstance = new TextEditorMarkers(store, HeaderContainer)
TextEditorMarkersInstance.render()

const SheetReflowBtnsContainer = document.createElement('div')
SheetReflowBtnsContainer.id = 'sheet-reflow-container'
HeaderContainer.appendChild(SheetReflowBtnsContainer)

const SelectSheetTemplateInstance = new SelectSheetTemplate(store, SheetReflowBtnsContainer)
const PageOffsetInstance = new PageOffset(store, SheetReflowBtnsContainer)
const AddPageButtonInstance = new AddPageButton(store, SheetReflowBtnsContainer)

SelectSheetTemplateInstance.render()
PageOffsetInstance.render()
AddPageButtonInstance.render()
