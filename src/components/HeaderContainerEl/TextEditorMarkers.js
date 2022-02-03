import Component from '../../utils/lib/component'

// TODO: Replace the FontAwsome CDN icon links with local cached icons for offline use
const headerActions = [
  { command: 'bold', class: 'fa-bold' },
  { command: 'italic', class: 'fa-italic' },
  { command: 'underline', class: 'fa-underline' },
  { command: 'insertUnorderedList', class: 'fa-list-ul' },
  { command: 'insertOrderedList', class: 'fa-list-ol' },
  { command: 'createLink', class: 'fa-link' },
  { command: 'justifyLeft', class: 'fa-align-left' },
  { command: 'justifyCenter', class: 'fa-align-center' },
  { command: 'justifyRight', class: 'fa-align-right' },
  { command: 'justifyFull', class: 'fa-align-justify' },
  { command: 'insertImage', class: 'fa-image' },
  { command: 'HiliteColor', class: 'fa-highlighter' },
]

class TextEditorMarkers extends Component {
  constructor(store, parent) {
    super({
      store,
      parent,
      element: document.getElementById('text-editor-markers'),
    })
  }

  render() {
    this.element.innerHTML = ''

    headerActions.forEach((el) => {
      const ButtonEl = document.createElement('button')
      ButtonEl.className = 'marker-btn'
      ButtonEl.setAttribute('data-element', el.command)
      ButtonEl.onclick = handleTextStyling

      const IconTagEl = document.createElement('i')
      IconTagEl.classList.add('fa', el.class)

      ButtonEl.appendChild(IconTagEl)
      this.element.appendChild(ButtonEl)
    })
  }
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

export default TextEditorMarkers
