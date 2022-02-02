const initialState = {
  pagesCount: 0,
  selectedSheetStyle: 'a3Sheet',
}

const state = JSON.parse(localStorage.getItem('state')) || initialState

export default state
