import { Map } from "immutable"

import * as actionTypes from "./constant"

const defaultState = Map({
  category: [],
  categorySongs: {},
  currentCategory: '全部'
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return state.set('category', action.category);
    case actionTypes.CHANGE_SONG_LIST:
      return state.set('categorySongs', action.categorySongs);
    case actionTypes.CHANGE_CURRENT_CATEGORY:
      return state.set('currentCategory', action.currentCategory);
    default:
      return state;
  }
}

export default reducer