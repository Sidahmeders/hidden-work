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

SelectSheetTemplate(SheetReflowBtnsContainer)
AddPageButton(SheetReflowBtnsContainer)
new TextEditorMarkers(store, HeaderContainer).render()
new PageOffset(store, SheetReflowBtnsContainer).render()
