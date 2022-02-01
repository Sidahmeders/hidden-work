const PageOffsetEl = document.createElement('input')
PageOffsetEl.id = 'page-offset'
PageOffsetEl.type = 'number'
PageOffsetEl.min = 0
PageOffsetEl.value = 1
PageOffsetEl.onchange = handlePageCount
PageOffsetEl.oninput = handleCountLimit

function handlePageCount(event) {
  const value = event.target.value
  location.href = location.origin + '#offset-' + value
}

function handleCountLimit() {
  this.value = this.value.slice(0, 2)
}

export default PageOffsetEl
