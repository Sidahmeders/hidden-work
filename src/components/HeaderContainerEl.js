import './common/_styles.scss'
import TextEditorMarkersEl from './common/TextEditorMarkersEl'
import SheetReflowBtnContainerEl from './common/SheetReflowBtnContainerEl'

const HeaderContainerEl = document.getElementById('header-container')

HeaderContainerEl.appendChild(TextEditorMarkersEl)
HeaderContainerEl.appendChild(SheetReflowBtnContainerEl)
