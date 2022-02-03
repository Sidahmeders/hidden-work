import state from '../utils/store/state'

class NewPaperSheet {
  constructor() {
    this.element = document.getElementById('sheets-container')
  }

  render(pageNumber) {
    const NewPageEl = document.createElement('div')

    NewPageEl.id = `offset-${pageNumber}`
    NewPageEl.classList.add('page', state.selectedSheetStyle)
    NewPageEl.contentEditable = true

    const PageNumberEl = document.createElement('div')
    PageNumberEl.innerText = pageNumber
    PageNumberEl.style = `
      position: absolute;
      left: 75%;
      padding: 4px 8px;
      border: 2px solid;
      background: #fff;
    `

    this.element.appendChild(PageNumberEl)
    this.element.appendChild(NewPageEl)
  }
}

export default NewPaperSheet
