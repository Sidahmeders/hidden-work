import { handlePageCount, handleCountLimit } from './_handlers'

const PageOffsetEl = document.createElement('input')
PageOffsetEl.classList.add('page-offset')
PageOffsetEl.type = 'number'
PageOffsetEl.min = 0
PageOffsetEl.value = 1
PageOffsetEl.onchange = handlePageCount
PageOffsetEl.oninput = handleCountLimit

export default PageOffsetEl
