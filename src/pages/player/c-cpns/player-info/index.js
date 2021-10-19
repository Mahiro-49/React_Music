import React, { memo,  } from 'react'

import { useSelector, shallowEqual } from "react-redux"

import { getSizeImage } from "@/utils/format-utils"

import MJPlayerDetailBar from "@/components/player-detail-bar"

import {
  InfoWrapper,
} from "./style"


export default memo(function MJPlayerInfo() {
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)
  

  return (
    <InfoWrapper>
      <div className="left">
        <div className="left-top">
          <img src={getSizeImage(currentSong.al.picUrl, 130)} alt="" />
          <span className="image_cover cover"></span>
        </div>
        <div className="left-bottom">
          <i className="sprite_icon2"></i>
          <a href="/todo">生成外联播放器</a>
        </div>
      </div>
      <div className="right">
        <div className="title">
          <i className="sprite_icon2"></i>
          <h3 className="title-name">{currentSong.name}</h3>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          <a href="/#" className="name">{currentSong.ar[0].name}</a>
        </div>
        <div className="album">
          <span className="label">所属专辑：</span>
          <a href="/#" className="name">{currentSong.ar[0].name}</a>
        </div>
        <MJPlayerDetailBar favor="收藏" share="分享" download="下载" comment="(13144)" />
      </div>
    </InfoWrapper>
  )
})
