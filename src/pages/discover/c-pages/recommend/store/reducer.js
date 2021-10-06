import { Map } from "immutable"

import * as actionTypes from "./constant"

const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbums: [],
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend", action.hotRecommend);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);
    default:
      return state;
  }
}

export default reducer