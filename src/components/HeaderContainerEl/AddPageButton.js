import Component from '../../utils/lib/component'
import { dispatch } from '../../utils/store'
import NewPaperSheet from '../NewPaperSheet'

class AddPageButton extends Component {
  constructor(store, state, parent) {
    super({
      store,
      parent,
      element: document.createElement('button'),
    })
    this.state = state
  }

  render() {
    const NewPaperSheetInstance = new NewPaperSheet()

    this.element.id = 'add-page-btn'
    this.element.innerText = '+'
    this.element.onclick = () => {
      NewPaperSheetInstance.render(this.state.pagesCount + 1)
      dispatch.setPagesCount(this.state.pagesCount + 1)
    }

    let counter = 0
    while (counter++ < this.state.pagesCount) {
      NewPaperSheetInstance.render(counter)
    }
  }
}

export default AddPageButton
