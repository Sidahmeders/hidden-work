import { stateKeys } from './_types'

const initialState = {
  [stateKeys.items]: ['I made this', 'Another thing'],
  [stateKeys.selectedSheetStyle]: 'a3Sheet',
  moly: 'hello wordl',
  callBackState: {},
}

const state = JSON.parse(localStorage.getItem('state')) || initialState

export default state
