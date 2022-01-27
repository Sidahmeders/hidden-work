import { selectedSheetStyle } from './_state'
import { handleNewPageCreation } from './_handlers'

const AddPageButtonEl = document.createElement('button')
AddPageButtonEl.className = 'add-page-btn'
AddPageButtonEl.innerText = '+'
AddPageButtonEl.onclick = (event) => handleNewPageCreation(event, selectedSheetStyle)

export default AddPageButtonEl
