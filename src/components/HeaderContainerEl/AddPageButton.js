import NewPaperSheet from '../NewPaperSheet'
import { dispatch, state } from '../../utils/store'

function AddPageButton(parent) {
  const element = document.createElement('button')
  element.id = 'add-page-btn'
  element.innerText = '+'

  element.onclick = () => {
    const SheetsContainer = document.getElementById('sheets-container')
    NewPaperSheet(SheetsContainer, state.pagesCount + 1)
    dispatch.setPagesCount(state.pagesCount + 1)
  }

  parent.appendChild(element)
}

export default AddPageButton
