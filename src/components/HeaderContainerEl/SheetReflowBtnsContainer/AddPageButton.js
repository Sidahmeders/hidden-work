import { dispatch } from '../../../utils/store'
import state from '../../../utils/store/state'
import createNewPage from '../../PaperSheetEl'
import Component from '../../../utils/lib/component'
import store from '../../../utils/store/store'

class AddPageButton extends Component {
  constructor() {
    super({
      store,
      parent: document.getElementById('sheet-reflow-container'),
      element: document.createElement('button'),
    })
  }

  render() {
    this.element.id = 'add-page-btn'
    this.element.innerText = '+'
    this.element.onclick = () => {
      createNewPage({ styleSheet: state.selectedSheetStyle, key: state.pagesCount })
      dispatch.setPagesCount(state.pagesCount + 1)
    }

    let counter = 0
    while (counter++ < state.pagesCount) {
      createNewPage({ styleSheet: state.selectedSheetStyle, key: counter })
    }
  }
}
export default AddPageButton
