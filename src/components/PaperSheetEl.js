export default function createNewPage({ styleSheet, key }) {
  const SheetsContainerEl = document.getElementById('sheets-container')
  const NewPageEl = document.createElement('div')

  NewPageEl.id = `offset-${key}`
  NewPageEl.classList.add('page', styleSheet)
  NewPageEl.contentEditable = true

  const PageNumberEl = document.createElement('div')
  PageNumberEl.innerText = key
  PageNumberEl.style = `
    position: absolute;
    left: 75%;
    padding: 4px 8px;
    border: 2px solid;
    background: #fff;
  `

  SheetsContainerEl.appendChild(PageNumberEl)
  SheetsContainerEl.appendChild(NewPageEl)
}
