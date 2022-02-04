import { dispatch } from '../../utils/store'

import ChapterPlaceholder from './ChapterPlaceholder'

class NewChapterBtn {
  constructor(parent) {
    this.parent = parent
    this.element = document.createElement('div')
  }

  render(state) {
    this.element.innerHTML = ''
    this.element.className = 'new-chapter-btn-container'

    const chapterToggleMap = state.chapterToggleMap
    const AddChapterBtn = document.createElement('div')
    AddChapterBtn.className = 'add-chapter-btn'
    AddChapterBtn.innerText = '+'
    AddChapterBtn.onclick = (event) => handleBtnClick(event, chapterToggleMap, this.parent, state)

    this.element.appendChild(AddChapterBtn)
    this.parent.appendChild(this.element)
  }
}

function handleBtnClick(event, chapterToggleMap, parent, state) {
  const chapterCount = document.getElementsByClassName('chapter-placeholder').length

  const ChapterPlaceholderInstance = new ChapterPlaceholder(parent)
  ChapterPlaceholderInstance.render(state)

  dispatch.setChapterMap({ chapterNumber: chapterCount, chapterInfo: 'XXXX' })
}

export default NewChapterBtn
