import { stateKeys } from './_types'

const initialState = {
  [stateKeys.pagesCount]: 0,
  [stateKeys.selectedSheetStyle]: 'a3Sheet',
}

const state = JSON.parse(localStorage.getItem('state')) || initialState

export default state
