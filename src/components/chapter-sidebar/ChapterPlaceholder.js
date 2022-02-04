class ChapterPlaceholder {
  constructor(parent) {
    this.parent = parent
    this.element = document.createElement('div')
  }

  render() {
    this.element.innerHTML = ''

    // const chapterToggleMap = state.chapterToggleMap
    const chapterCount = this.element.childElementCount + 1

    // if (chapterToggleMap[chapterCount]) {
    this.element.className = 'chapter-placeholder'

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
    this.parent.appendChild(this.element)
    // }
  }
}

function handleChapterStartEnd(event) {
  const value = event.target.value
  console.log(value)
}

export default ChapterPlaceholder
