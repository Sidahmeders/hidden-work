import Component from '../../utils/lib/component'

class PageOffset extends Component {
  constructor(store, state, parent) {
    super({
      store,
      parent,
      element: document.createElement('input'),
    })
    this.state = state
  }

  render() {
    this.element.id = 'page-offset'
    this.element.min = 0
    this.element.value = `${this.state.pagesCount}/${1}`
    this.element.onchange = handlePageCount
    this.element.oninput = (event) => handleCountLimit(event, this.state)
  }
}

function handlePageCount(event) {
  let value = event.target.value
  value = value.split('/')[1]

  location.href = location.origin + '#offset-' + value
}

function handleCountLimit(event, state) {
  const pagesCount = state.pagesCount
  let currPageNumber = this.value.split('/')[1]
  currPageNumber = currPageNumber < pagesCount ? currPageNumber : pagesCount

  this.value = `${pagesCount}/${currPageNumber}`
}

export default PageOffset
