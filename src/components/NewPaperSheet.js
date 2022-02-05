import { dispatch, state } from '../utils/store'

function NewPaperSheet(parent, pageNumber) {
  const PaperSheet = document.createElement('div')
  const pageInnerText = state?.sheetsMap[pageNumber] || ''

  PaperSheet.id = `offset-${pageNumber}`
  PaperSheet.classList.add('page', state.selectedSheetStyle)
  PaperSheet.contentEditable = true
  PaperSheet.oninput = (event) => savePageSheetText(event, pageNumber)
  PaperSheet.innerText = pageInnerText

  const PageNumber = document.createElement('div')
  PageNumber.innerText = pageNumber
  PageNumber.style = `
      position: absolute;
      left: 50%;
      padding: 10px;
      border: 1.5px solid #465;
      border-top: 0px;
      background: #fff;
    `

  parent.appendChild(PageNumber)
  parent.appendChild(PaperSheet)
}

function savePageSheetText(event, pageNumber) {
  const editableDiv = event.target
  let innerText = editableDiv.innerText
  if (innerText[innerText.length - 1] === '\n') innerText = innerText.slice(0, -1)

  dispatch.setSheetsMap({ pageNumber, sheetText: innerText })
}

document.addEventListener('DOMContentLoaded', renderExistingSheets)

function renderExistingSheets() {
  const SheetsContainer = document.getElementById('sheets-container')
  let counter = 0
  while (counter++ < state.pagesCount) {
    NewPaperSheet(SheetsContainer, counter)
  }
}

export default NewPaperSheet
