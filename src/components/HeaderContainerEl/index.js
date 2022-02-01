import './_styles.scss'
import TextEditorMarkersEl from './TextEditorMarkersEl'
import SheetReflowBtnContainerEl from './SheetReflowBtnsContainerEl'

const HeaderContainerEl = document.getElementById('header-container')

HeaderContainerEl.appendChild(TextEditorMarkersEl)
HeaderContainerEl.appendChild(SheetReflowBtnContainerEl)
