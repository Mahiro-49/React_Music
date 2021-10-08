import * as actionTypes from "./constant"

import { 
  getTopBanner,
  getHotRecommend,
  getNewAlbum,
  getTopList,
  getArtistList
} from "@/services/recommend"

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend: res.result
})

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

const changeUpListAction = (res) => ({
  type: actionTypes.CHANGE_UP_LIST,
  upList: res.playlist
})
const changeNewListAction = (res) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  newList: res.playlist
})
const changeOriginListAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  originList: res.playlist
})

const changeArtistListAction = (res) => ({
  type: actionTypes.CHANGE_ARTIST_LIST,
  artistList: res.artists
})
 
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanner().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch(idx) {
        case 0:
          dispatch(changeUpListAction(res));
          break;
        case 2:
          dispatch(changeNewListAction(res));
          break;
        case 3:
          dispatch(changeOriginListAction(res));
          break;
        default:
      }
    })
  }
}

export const getArtistListAction = () => {
  return dispatch => {
    getArtistList(5, 5001).then(res => {
      dispatch(changeArtistListAction(res))
    })
  }
}