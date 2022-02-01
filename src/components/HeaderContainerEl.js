import './common/_styles.scss'
import TextEditorHeaderEl from './common/TextHeaderEl'
import AddPageButtonEl from './common/AddPageButtonEl'
import PageOffsetEl from './common/PageOffsetEl'
import SelectSheetTemplateEl from './common/SelectSheetTemplateEl'

const HeaderContainerEl = document.getElementById('header-container')

HeaderContainerEl.appendChild(TextEditorHeaderEl)
HeaderContainerEl.appendChild(AddPageButtonEl)
HeaderContainerEl.appendChild(PageOffsetEl)
HeaderContainerEl.appendChild(SelectSheetTemplateEl)
