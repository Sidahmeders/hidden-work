import { stateKeys } from './_types'

function setPagesCount(state, payload) {
  state[stateKeys.pagesCount] = payload
  return state
}

function setSheetStyle(state, payload) {
  state[stateKeys.selectedSheetStyle] = payload
  return state
}

function setSheetsMap(state, payload) {
  const { pageNumber, sheetText } = payload
  state[stateKeys.sheetsMap][pageNumber] = sheetText
  return state
}

function setChaptersMap(state, payload) {
  const { chapterNumber, chapterInfo } = payload
  state[stateKeys.chaptersMap][chapterNumber] = chapterInfo
}

export default { setPagesCount, setSheetStyle, setSheetsMap, setChaptersMap }
