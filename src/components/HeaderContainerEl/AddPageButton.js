import Component from '../../utils/lib/component'
import NewPaperSheet from '../NewPaperSheet'
import { dispatch, state } from '../../utils/store'

class AddPageButton extends Component {
  constructor(store, parent) {
    super({
      store,
      parent,
      element: document.createElement('button'),
    })
  }

  render() {
    const NewPaperSheetInstance = new NewPaperSheet()

    this.element.id = 'add-page-btn'
    this.element.innerText = '+'
    this.element.onclick = () => {
      NewPaperSheetInstance.render(state.pagesCount + 1)
      dispatch.setPagesCount(state.pagesCount + 1)
    }

    let counter = 0
    while (counter++ < state.pagesCount) {
      NewPaperSheetInstance.render(counter)
    }
  }
}

export default AddPageButton
