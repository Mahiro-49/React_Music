import React, { memo, useEffect } from 'react'

import {useDispatch,useSelector, shallowEqual} from 'react-redux'

import MJHeaderRCM from "@/components/theme-header-rcm"
import MJSongsCover from "@/components/songs-cover"

import {getHotRecommendAction} from "../../store/actionCreators"


import { RecommendWrapper } from "./style"

export default memo(function MJHotRecommend() {
  const {hotRecommend} = useSelector(state => ({
    hotRecommend: state.getIn(["recommend", "hotRecommend"])
  }), shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  },[dispatch])

  return (
    <RecommendWrapper>
      <MJHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}></MJHeaderRCM>
      <div className="recommend-list">
        {
          hotRecommend.map((item, index) => {
            return <MJSongsCover key={item.id} info={item}/>
          })
        }
      </div>
    </RecommendWrapper>
  )
})
