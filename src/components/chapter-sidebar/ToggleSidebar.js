import LeftArrowIcon from '../../assets/left-arrow.png'

function ToggleSidebar(parent) {
  const element = document.createElement('div')
  element.className = 'toggle-sidebar-btn'

  const IconEl = document.createElement('img')
  IconEl.style.width = '80%'
  IconEl.src = LeftArrowIcon

  element.appendChild(IconEl)
  parent.appendChild(element)
}

export default ToggleSidebar
