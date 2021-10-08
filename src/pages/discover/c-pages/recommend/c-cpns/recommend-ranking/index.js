import React, { memo, useEffect } from 'react'

import {useDispatch, useSelector, shallowEqual} from "react-redux"

import MJHeaderRCM from "@/components/theme-header-rcm"
import MJTopRanking from "@/components/top-ranking"

import { RankingWrapper } from "./style"

import {getTopListAction} from "../../store/actionCreators"


export default memo(function MJRanking() {
  const {upList, newList, originList} = useSelector(state => ({
    upList: state.getIn(["recommend", "upList"]),
    newList: state.getIn(["recommend", "newList"]),
    originList: state.getIn(["recommend", "originList"]),
  }), shallowEqual)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <MJHeaderRCM title="榜单" />
      <div className="tops">
        <MJTopRanking info={upList}/>
        <MJTopRanking info={newList}/>
        <MJTopRanking info={originList}/>
      </div>
    </RankingWrapper>

  )
})
