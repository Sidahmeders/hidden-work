import { initHeaderElements } from './_handlers'

const TextEditorHeaderEl = document.createElement('div')
TextEditorHeaderEl.classList.add('text-editor-header')

initHeaderElements(TextEditorHeaderEl)

export default TextEditorHeaderEl
