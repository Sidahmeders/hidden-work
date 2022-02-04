import './_styles.scss'
import { state } from '../../utils/store'

import NewChapterBtn from './NewChapterBtn'
import ToggleSidebar from './ToggleSidebar'

const ChapterSidebarContainer = document.getElementById('chapter-sidebar')

const NewChapterBtnInstance = new NewChapterBtn(ChapterSidebarContainer)
const ToggleSidebarInstance = new ToggleSidebar(ChapterSidebarContainer)

NewChapterBtnInstance.render(state)
ToggleSidebarInstance.render()
