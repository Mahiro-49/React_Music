import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import MJRankHeader from "./c-cpns/header"
import MJRankList from "./c-cpns/list"
import MJTopRanking from "./c-cpns/top-ranking"

import { getTopListAction } from "./store/actionCreator"

import { RankingWrapper, Left, Right } from "./style"

export default memo(function MJRanking() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction())
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <Left>
        <MJTopRanking />
      </Left>
      <Right>
        <MJRankHeader />
        <MJRankList />
      </Right>
    </RankingWrapper>
  )
})