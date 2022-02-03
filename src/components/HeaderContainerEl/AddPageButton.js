import { dispatch } from '../../utils/store'
import state from '../../utils/store/state'
import NewPaperSheet from '../NewPaperSheet'
import Component from '../../utils/lib/component'
import store from '../../utils/store/store'

class AddPageButton extends Component {
  constructor() {
    super({
      store,
      parent: document.getElementById('sheet-reflow-container'),
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
