import { Map } from "immutable"

import * as actionTypes from "./constant"

const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbums: [],
  upList: {},
  newList: {},
  originList: {},
  artistList: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend", action.hotRecommend);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);
    case actionTypes.CHANGE_UP_LIST:
      return state.set("upList", action.upList);
    case actionTypes.CHANGE_NEW_LIST:
      return state.set("newList", action.newList);
    case actionTypes.CHANGE_ORIGIN_LIST:
      return state.set("originList", action.originList);
    case actionTypes.CHANGE_ARTIST_LIST:
      return state.set("artistList", action.artistList);
    default:
      return state;
  }
}

export default reducer