import { stateKeys } from './_types'

function setPagesCount(state, payload) {
  state[stateKeys.pagesCount] = payload
  return state
}

function setSheetStyle(state, payload) {
  state[stateKeys.selectedSheetStyle] = payload
  return state
}

function setSheetsScript(state, payload) {
  const { pageNumber, sheetText } = payload
  state[stateKeys.sheetsScriptsMap][pageNumber] = sheetText
  return state
}

function setChapterMap(state, payload) {
  const { chapterNumber, chapterInfo } = payload
  state[stateKeys.chapterToggleMap][chapterNumber] = chapterInfo
}

export default { setPagesCount, setSheetStyle, setSheetsScript, setChapterMap }
