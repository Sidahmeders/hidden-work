import { stateKeys } from './_types'

export default {
  [stateKeys.items]: ['I made this', 'Another thing'],
  [stateKeys.selectedSheetStyle]: 'a3Sheet',
  [stateKeys.sheetOptions]: ['a3Sheet', 'a4Sheet', 'usLegal', 'usLetter', 'usTablois'],
  // TODO: Replace the FontAwsome CDN icon links with local cached icons for offline use
  [stateKeys.headerActions]: [
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
  ],
}
