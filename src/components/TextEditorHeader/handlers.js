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

export function handleNewPageCreation() {
  const sheetsContainerEl = document.getElementById('sheets-container')
  const newPageEl = document.createElement('div')
  newPageEl.contentEditable = true
  newPageEl.classList.add('page')
  sheetsContainerEl.appendChild(newPageEl)
}
