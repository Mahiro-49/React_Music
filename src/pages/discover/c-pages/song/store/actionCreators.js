import * as actionTypes from "./constant"

import { getSongCategoryList, getSongCategory } from "@/services/song"

import { handleSongsCategory } from "@/utils/handle-data"

const changeCategoryAction = (data) => ({
  type: actionTypes.CHANGE_CATEGORY,
  category: data
})

const changeSongListAction = (res) => ({
  type: actionTypes.CHANGE_SONG_LIST,
  categorySongs: res
})

export const changeCurrentCategoryAction = (name) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: name
})

export const getSongListAction = (page) => {
  return (dispatch, getState) => {
    const name = getState().getIn(['song', 'currentCategory'])
    getSongCategoryList(name, page * 35).then(res => {
      dispatch(changeSongListAction(res))
    })
  }
}

export const getSongCategoryAction = () => {
  return dispatch => {
    getSongCategory().then(res => {
      const data = handleSongsCategory(res)
      dispatch(changeCategoryAction(data))
    })
  }
}