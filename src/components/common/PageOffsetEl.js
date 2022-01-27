import { handlePageCount, handleCountLimit } from './_handlers'

const PageOffsetEl = document.createElement('input')
PageOffsetEl.className = 'page-offset'
PageOffsetEl.type = 'number'
PageOffsetEl.min = 0
PageOffsetEl.value = 1
PageOffsetEl.onchange = handlePageCount
PageOffsetEl.oninput = handleCountLimit

export default PageOffsetEl
