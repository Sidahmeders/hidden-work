import './_styles.scss'
import ToggleSidebarEl from './slices/ToggleSidebarEl'
import ChapterPlaceholderEl from './slices/ChapterPlaceholderEl'

const ChapterSidebarEl = document.getElementById('chapter-sidebar')

ChapterSidebarEl.appendChild(ToggleSidebarEl)
ChapterSidebarEl.appendChild(ChapterPlaceholderEl)
