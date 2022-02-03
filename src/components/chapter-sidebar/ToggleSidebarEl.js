import LeftArrowIcon from '../../assets/left-arrow.png'

const ToggleSidebarEl = document.createElement('div')
ToggleSidebarEl.className = 'toggle-sidebar-btn'

const IconEl = document.createElement('img')
IconEl.style.width = '80%'
IconEl.src = LeftArrowIcon

ToggleSidebarEl.appendChild(IconEl)

export default ToggleSidebarEl