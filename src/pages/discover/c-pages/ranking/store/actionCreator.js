import * as actionTypes from "./constants"

import { getTopList, getRankingList } from "@/services/ranking"

const changeTopListAction = (topList) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList
})

const changeRankingAction = (playList) => ({
  type: actionTypes.CHANGE_RANKING_LIST,
  playList
})

export const changeCurrentIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  index
})

export const getTopListAction = () => {
  return dispatch => {
    getTopList().then(res => {
      const topList = res.list
      dispatch(changeTopListAction(topList))
    })
  }
}

export const getRankingListAction = (id) => {
  return dispatch => {
    getRankingList(id).then(res => {
      const playList = res.playlist
      console.log(res);
      dispatch(changeRankingAction(playList))
    })
  }
}