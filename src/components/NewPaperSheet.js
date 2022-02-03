import { dispatch, state } from '../utils/store'

class NewPaperSheet {
  constructor() {
    this.element = document.getElementById('sheets-container')
  }

  render(pageNumber) {
    const PaperSheet = document.createElement('div')

    PaperSheet.id = `offset-${pageNumber}`
    PaperSheet.classList.add('page', state.selectedSheetStyle)
    PaperSheet.contentEditable = true
    PaperSheet.onkeyup = (event) => savePageSheetText(event, pageNumber)

    const PageNumber = document.createElement('div')
    PageNumber.innerText = pageNumber
    PageNumber.style = `
      position: absolute;
      left: 75%;
      padding: 4px 8px;
      border: 2px solid;
      background: #fff;
    `

    this.element.appendChild(PageNumber)
    this.element.appendChild(PaperSheet)
  }
}

function savePageSheetText(event, pageNumber) {
  const editableDiv = event.target
  let innerText = editableDiv.innerText
  if (innerText[innerText.length - 1] === '\n') innerText = innerText.slice(0, -1)

  dispatch.setSheetsScript({ pageNumber, sheetText: innerText })
}

document.addEventListener('DOMContentLoaded', renderExistingSheets)

function renderExistingSheets() {
  const NewPaperSheetInstance = new NewPaperSheet()
  let counter = 0
  while (counter++ < state.pagesCount) {
    NewPaperSheetInstance.render(counter)
  }
}

export default NewPaperSheet
