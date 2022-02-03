import LeftArrowIcon from '../../assets/left-arrow.png'
import Component from '../../utils/lib/component'

class ToggleSidebar extends Component {
  constructor(store, parent) {
    super({
      store,
      parent,
      element: document.createElement('div'),
    })
  }

  render() {
    this.element.className = 'toggle-sidebar-btn'

    const IconEl = document.createElement('img')
    IconEl.style.width = '80%'
    IconEl.src = LeftArrowIcon

    this.element.appendChild(IconEl)
  }
}

export default ToggleSidebar
