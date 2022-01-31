import { dispatch, _state } from '../../utils/store/'

export function initHeaderElements(TextEditorHeaderEl) {
  _state.headerActions.forEach((el) => {
    const ButtonEl = document.createElement('button')
    ButtonEl.className = 'marker-btn'
    ButtonEl.setAttribute('data-element', el.command)
    ButtonEl.onclick = handleTextStyling

    const IconTagEl = document.createElement('i')
    IconTagEl.classList.add('fa', el.class)

    ButtonEl.appendChild(IconTagEl)
    TextEditorHeaderEl.appendChild(ButtonEl)
  })
}

function handleTextStyling() {
  /**  FIXME:
   * As of 2022 The execCommand() is officially obsolete/deprecated but there's no alternative. and for a rich text support,
   * we need to keep using execCommand() and figure out what actually works with browsers that we want to support.
   * All the current standarization efforts (Input Events 2, Clipboard API) fail to cover the features that execCommand() do
   * for example, (undo/redo, actually changing content within the selection range).
   */
  const command = this.dataset['element']
  if (command == 'HiliteColor') {
    document.execCommand(command, false, 'yellow')
  } else if (command == 'createLink' || command == 'insertImage') {
    let url = prompt('Enter the link here:') || ''
    document.execCommand(command, false, url)
  } else document.execCommand(command, false, null)
}

export function createSheetOptionsElement(SelectSheetTemplateEl) {
  const sheetOptions = _state.sheetOptions

  for (let i = 0; i < sheetOptions.length; i++) {
    const option = sheetOptions[i]
    const SheetTemplateOption = document.createElement('option')
    SheetTemplateOption.innerText = option
    SheetTemplateOption.selected = i === 0 ? true : false

    SelectSheetTemplateEl.appendChild(SheetTemplateOption)
  }
}

export function handleNewPageCreation() {
  const sheetStyle = _state.selectedSheetStyle

  const SheetsContainerEl = document.getElementById('sheets-container')
  const NewPageEl = document.createElement('div')
  NewPageEl.contentEditable = true
  const pageCount = SheetsContainerEl.childElementCount
  NewPageEl.id = `offset-${pageCount}`
  NewPageEl.classList.add('page', sheetStyle)
  SheetsContainerEl.appendChild(NewPageEl)
}

export function handlePageCount(event) {
  const value = event.target.value
  location.href = location.origin + '#offset-' + value
}

export function handleCountLimit() {
  this.value = this.value.slice(0, 2)
}

export function handleSheetStyle() {
  const selectedOption = this.options[this.selectedIndex].text
  dispatch.setSheetStyle(selectedOption)

  const PaperSheetsCollection = document.getElementsByClassName('page')
  for (let SheetEl of PaperSheetsCollection) {
    SheetEl.classList.remove(...SheetEl.classList)
    SheetEl.classList.add('page', selectedOption)
  }
}
