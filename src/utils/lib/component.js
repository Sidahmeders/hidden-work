import Store from '../store/store'

export default class Component {
  constructor(props = {}) {
    let self = this

    self.render = self.render || function () {}

    if (props.store instanceof Store) {
      props.store.events.subscribe('stateChange', () => self.render())
    }

    if (Object.prototype.hasOwnProperty.call(props, 'element')) {
      this.element = props.element
    }

    if (Object.prototype.hasOwnProperty.call(props, 'parent')) {
      this.parent = props.parent
      this.parent.appendChild(this.element)
    }
  }
}
