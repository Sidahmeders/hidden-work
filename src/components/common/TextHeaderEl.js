import { handleTextStyling } from './_handlers'

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

const TextEditorHeaderEl = document.createElement('div')
TextEditorHeaderEl.classList.add('text-editor-header')

headerActions.forEach((el) => {
  const ButtonEl = document.createElement('button')
  ButtonEl.className = 'marker-btn'
  ButtonEl.setAttribute('data-element', el.command)
  ButtonEl.onclick = handleTextStyling

  const IconTagEl = document.createElement('i')
  IconTagEl.classList.add('fa', el.class)

  ButtonEl.appendChild(IconTagEl)
  TextEditorHeaderEl.appendChild(ButtonEl)
})

export default TextEditorHeaderEl
