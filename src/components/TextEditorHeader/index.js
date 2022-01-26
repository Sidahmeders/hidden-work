import './style.scss'
import { handleTextStyling, handleNewPageCreation, handlePageCount, handleCountLimit } from './handlers'

const HeaderContainerEl = document.getElementById('header-container')

// TODO: Replace the FontAwsome CDN icon links with local cached icons for offline use
const dataElements = [
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
dataElements.forEach((el) => {
  const ButtonEl = document.createElement('button')
  ButtonEl.classList.add('btn')
  ButtonEl.setAttribute('data-element', el.command)
  ButtonEl.onclick = handleTextStyling

  const IconTagEl = document.createElement('i')
  IconTagEl.classList.add('fa', el.class)

  ButtonEl.appendChild(IconTagEl)
  TextEditorHeaderEl.appendChild(ButtonEl)
})

const AddPageButtonEl = document.createElement('button')
AddPageButtonEl.classList.add('add-sheet-btn')
AddPageButtonEl.innerText = '+'
AddPageButtonEl.onclick = handleNewPageCreation

const PageCountEl = document.createElement('input')
PageCountEl.type = 'number'
PageCountEl.min = 0
PageCountEl.value = 1
PageCountEl.classList.add('offset-sheet-input')
PageCountEl.onchange = handlePageCount
PageCountEl.oninput = handleCountLimit

HeaderContainerEl.appendChild(TextEditorHeaderEl)
HeaderContainerEl.appendChild(AddPageButtonEl)
HeaderContainerEl.appendChild(PageCountEl)
