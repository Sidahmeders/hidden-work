import './_styles.scss'
import { store } from '../../utils/store'

import ChapterPlaceholder from './ChapterPlaceholder'
import ToggleSidebar from './ToggleSidebar'

const ChapterSidebarContainer = document.getElementById('chapter-sidebar')

const ChapterPlaceholderInstance = new ChapterPlaceholder(store, ChapterSidebarContainer)
const ToggleSidebarInstance = new ToggleSidebar(store, ChapterSidebarContainer)

ChapterPlaceholderInstance.render()
ToggleSidebarInstance.render()
