import Component from '../../utils/lib/component'
import { state } from '../../utils/store'

class PageOffset extends Component {
  constructor(store, parent) {
    super({
      store,
      parent,
      element: document.createElement('input'),
    })
  }

  render() {
    this.element.id = 'page-offset'
    this.element.min = 0
    this.element.value = `${state.pagesCount}/${1}`
    this.element.onchange = handlePageCount
    this.element.oninput = handleCountLimit
  }
}

function handlePageCount(event) {
  let value = event.target.value
  value = value.split('/')[1]

  location.href = location.origin + '#offset-' + value
}

function handleCountLimit() {
  const pagesCount = state.pagesCount
  let currPageNumber = this.value.split('/')[1]
  currPageNumber = currPageNumber < pagesCount ? currPageNumber : pagesCount

  this.value = `${pagesCount}/${currPageNumber}`
}

export default PageOffset
