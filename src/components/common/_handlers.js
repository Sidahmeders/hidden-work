// import store from '../../utils/store'

export function handleTextStyling() {
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

export function handleNewPageCreation(event, sheetStyle) {
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
  const PaperSheetsCollection = document.getElementsByClassName('page')
  const selectedOption = this.options[this.selectedIndex].text

  for (let SheetEl of PaperSheetsCollection) {
    SheetEl.classList.remove(...SheetEl.classList)
    SheetEl.classList.add('page', selectedOption)
  }
}
