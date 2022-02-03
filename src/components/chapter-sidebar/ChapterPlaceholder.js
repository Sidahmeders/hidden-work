import Component from '../../utils/lib/component'

class ChapterPlaceholder extends Component {
  constructor(store, parent) {
    super({
      store,
      parent,
      element: document.createElement('div'),
    })
  }

  render() {
    this.element.className = 'chapter-placeholder'

    const InputEl = document.createElement('input')
    InputEl.type = 'text'

    this.element.appendChild(InputEl)
  }
}

export default ChapterPlaceholder
