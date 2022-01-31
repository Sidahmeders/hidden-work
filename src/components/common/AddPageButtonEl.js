import { handleNewPageCreation } from './_handlers'

const AddPageButtonEl = document.createElement('button')
AddPageButtonEl.className = 'add-page-btn'
AddPageButtonEl.innerText = '+'
AddPageButtonEl.onclick = handleNewPageCreation
export default AddPageButtonEl
