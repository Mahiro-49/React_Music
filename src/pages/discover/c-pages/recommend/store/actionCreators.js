import * as actionTypes from "./constant"

import { 
  getTopBanner,
  getHotRecommend,
  getNewAlbum,
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
      console.log(res);
    })
  }
}