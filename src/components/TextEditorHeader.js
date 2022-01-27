import './common/_styles.scss'
import TextEditorHeaderEl from './common/TextHeaderEl'
import AddPageButtonEl from './common/AddPageButtonEl'

const HeaderContainerEl = document.getElementById('header-container')

HeaderContainerEl.appendChild(TextEditorHeaderEl)
HeaderContainerEl.appendChild(AddPageButtonEl)
