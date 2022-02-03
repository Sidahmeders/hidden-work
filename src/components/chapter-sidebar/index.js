import './_styles.scss'
import ToggleSidebarEl from './ToggleSidebarEl'
import ChapterPlaceholderEl from './ChapterPlaceholderEl'

const ChapterSidebarEl = document.getElementById('chapter-sidebar')

ChapterSidebarEl.appendChild(ToggleSidebarEl)
ChapterSidebarEl.appendChild(ChapterPlaceholderEl)
