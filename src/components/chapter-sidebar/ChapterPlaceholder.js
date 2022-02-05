function ChapterPlaceholder(chapterCount = 0) {
  const element = document.createElement('div')
  element.className = 'chapter-placeholder'

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
  element.appendChild(ChapterHeader)
  element.appendChild(ChapterName)

  return element
}

function handleChapterStartEnd(event) {
  const value = event.target.value
  console.log(value)
}

export default ChapterPlaceholder
