import React, { memo } from 'react'

import { useSelector, shallowEqual } from 'react-redux'

import { HeaderWrapper } from "./style"

import { formatMonthDay } from "@/utils/format-utils";

import MJPlayerDetailBar from "@/components/player-detail-bar"

export default memo(function MJRankHeader() {
  const { playList } = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"])
  }), shallowEqual)


  return (
    <HeaderWrapper>
      <div className="image">
        <img src={playList.coverImgUrl} alt="" />
        <span className="image_cover"></span>
      </div>
      <div className="info">
        <div className="title">{playList.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(playList.updateTime)}</div>
          <div className="update">（{"刚刚更新"}）</div>
        </div>
        <MJPlayerDetailBar favor={`(${playList.subscribedCount})`}
                           share={`${playList.shareCount}`}
                           download="下载"
                           comment={`${playList.commentCount}`}/>
      </div>
    </HeaderWrapper>
  )
})
