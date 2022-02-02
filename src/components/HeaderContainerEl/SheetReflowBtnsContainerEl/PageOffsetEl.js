import { _state } from '../../../utils/store'

const PageOffsetEl = document.createElement('input')
PageOffsetEl.id = 'page-offset'
PageOffsetEl.min = 0
PageOffsetEl.value = `${_state.pagesCount()}/${1}`
PageOffsetEl.onchange = handlePageCount
PageOffsetEl.oninput = handleCountLimit

function handlePageCount(event) {
  let value = event.target.value
  value = value.split('/')[1]

  location.href = location.origin + '#offset-' + value
}

function handleCountLimit() {
  const pagesCount = _state.pagesCount()
  let currPageNumber = this.value.split('/')[1]
  currPageNumber = currPageNumber ? currPageNumber.slice(0, 2) : ''

  this.value = `${pagesCount}/${currPageNumber}`
}

export default PageOffsetEl
