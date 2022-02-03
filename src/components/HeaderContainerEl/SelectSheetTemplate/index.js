import './template-styles/sheet-templates'
import state from '../../../utils/store/state'
import { dispatch } from '../../../utils/store'
import Component from '../../../utils/lib/component'
import store from '../../../utils/store/store'

class SelectSheetTemplate extends Component {
  constructor() {
    super({
      store,
      parent: document.getElementById('sheet-reflow-container'),
      element: document.createElement('select'),
    })
  }

  render() {
    this.element.id = 'select-sheet-style'
    this.element.onchange = dispatch.setSheetStyle

    const sheetOptions = ['a3Sheet', 'a4Sheet', 'usLegal', 'usLetter', 'usTablois']

    for (let i = 0; i < sheetOptions.length; i++) {
      const option = sheetOptions[i]
      const SheetOptionEl = document.createElement('option')
      SheetOptionEl.innerText = option
      SheetOptionEl.selected = state.selectedSheetStyle === option ? true : false

      this.element.appendChild(SheetOptionEl)
    }
  }
}

export default SelectSheetTemplate
