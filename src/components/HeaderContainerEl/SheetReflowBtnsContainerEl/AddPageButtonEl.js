import { _state } from '../../../utils/store'

const AddPageButtonEl = document.createElement('button')
AddPageButtonEl.id = 'add-page-btn'
AddPageButtonEl.innerText = '+'
AddPageButtonEl.onclick = handleNewPageCreation

function handleNewPageCreation() {
  const SheetsContainerEl = document.getElementById('sheets-container')
  const pageCount = SheetsContainerEl.childElementCount
  const NewPageEl = document.createElement('div')

  NewPageEl.id = `offset-${pageCount}`
  NewPageEl.classList.add('page', _state.selectedSheetStyle())
  NewPageEl.contentEditable = true

  SheetsContainerEl.appendChild(NewPageEl)
}

export default AddPageButtonEl
