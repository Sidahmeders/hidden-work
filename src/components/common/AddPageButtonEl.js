import { handleNewPageCreation } from './_handlers'

const AddPageButtonEl = document.createElement('button')
AddPageButtonEl.classList.add('add-page-btn')
AddPageButtonEl.innerText = '+'
AddPageButtonEl.onclick = handleNewPageCreation

export default AddPageButtonEl
