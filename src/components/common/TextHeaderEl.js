import { dataElements } from './_state'
import { handleTextStyling } from './_handlers'

const TextEditorHeaderEl = document.createElement('div')
TextEditorHeaderEl.classList.add('text-editor-header')

dataElements.forEach((el) => {
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
