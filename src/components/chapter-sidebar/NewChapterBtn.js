import { dispatch } from '../../utils/store'
import ChapterPlaceholder from './ChapterPlaceholder'

function NewChapterBtn(parent) {
  const element = document.createElement('div')
  element.className = 'new-chapter-btn-container'

  const AddChapterBtn = document.createElement('div')
  AddChapterBtn.className = 'add-chapter-btn'
  AddChapterBtn.innerText = '+'
  AddChapterBtn.onclick = (event) => handleBtnClick(event, parent)

  element.appendChild(AddChapterBtn)
  parent.appendChild(element)
}

function handleBtnClick(event, parent) {
  const chapterCount = document.getElementsByClassName('chapter-placeholder').length + 1

  parent.appendChild(ChapterPlaceholder(chapterCount))

  dispatch.setChapterMap({ chapterNumber: chapterCount, chapterInfo: 'XXXX' })
}

export default NewChapterBtn
