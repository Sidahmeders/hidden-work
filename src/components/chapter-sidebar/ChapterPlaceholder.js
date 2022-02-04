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
    this.element.innerHTML = ''
    this.element.className = 'chapter-placeholder'

    const chapterCount = this.element.childElementCount + 1
    const ChapterHeader = document.createElement('div')
    ChapterHeader.className = 'chapter-header'
    ChapterHeader.innerText = 'Chapter' + chapterCount

    const ChapterStartEnd = document.createElement('input')
    ChapterStartEnd.className = 'chapter-start-end'
    ChapterStartEnd.placeholder = '.../...'
    ChapterStartEnd.onchange = handleChapterStartEnd

    const ChapterName = document.createElement('input')
    ChapterName.className = 'chapter-name'

    ChapterHeader.appendChild(ChapterStartEnd)
    this.element.appendChild(ChapterHeader)
    this.element.appendChild(ChapterName)
  }
}

function handleChapterStartEnd(event) {
  const value = event.target.value

  console.log(value, 'VAL')
}

export default ChapterPlaceholder
