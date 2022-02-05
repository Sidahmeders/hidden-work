import { stateKeys } from './_types'

const initialState = {
  [stateKeys.pagesCount]: 0,
  [stateKeys.selectedSheetStyle]: 'a3Sheet',
  [stateKeys.sheetsMap]: {},
  [stateKeys.chaptersMap]: {},
}

const state = JSON.parse(localStorage.getItem('state')) || initialState

export default state
