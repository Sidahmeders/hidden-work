import './_styles.scss'
import { store } from '../../utils/store'

import TextEditorMarkers from './TextEditorMarkers'
import AddPageButton from './AddPageButton'
import PageOffset from './PageOffset'
import SelectSheetTemplate from './SelectSheetTemplate'

const HeaderContainer = document.getElementById('header-container')

const SheetReflowBtnsContainer = document.createElement('div')
SheetReflowBtnsContainer.id = 'sheet-reflow-container'

const SheetMarkersBtnsContainer = document.createElement('div')
SheetMarkersBtnsContainer.id = 'text-editor-markers'

HeaderContainer.appendChild(SheetMarkersBtnsContainer)
HeaderContainer.appendChild(SheetReflowBtnsContainer)

const TextEditorMarkersInstance = new TextEditorMarkers(store, HeaderContainer)
const SelectSheetTemplateInstance = new SelectSheetTemplate(store, SheetReflowBtnsContainer)
const PageOffsetInstance = new PageOffset(store, SheetReflowBtnsContainer)
const AddPageButtonInstance = new AddPageButton(store, SheetReflowBtnsContainer)

TextEditorMarkersInstance.render()
SelectSheetTemplateInstance.render()
PageOffsetInstance.render()
AddPageButtonInstance.render()
