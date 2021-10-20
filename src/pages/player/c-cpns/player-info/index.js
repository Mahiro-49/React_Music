import React, { memo, useState } from 'react'

import { useSelector, shallowEqual } from "react-redux"

import { getSizeImage } from "@/utils/format-utils"

import MJPlayerDetailBar from "@/components/player-detail-bar"

import {
  InfoWrapper,
} from "./style"


export default memo(function MJPlayerInfo() {
  const [isOpen, setIsOpen] = useState(false)

  const { currentSong, lyricList } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    lyricList: state.getIn(["player", "lyricList"])
  }), shallowEqual)


  return (
    <InfoWrapper isOpen={isOpen}>
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
        <div className="lyric-list">
          {
            lyricList.map((item, index) => {
              return (
                <p key={item.time} className="list">{item.content}<br /></p>
              )
            })
          }

          <button className="lyric-button" onClick={e => setIsOpen(!isOpen)}>
            {isOpen ? "收起" : "展开"}
            <i className="sprite_icon2"></i>
          </button>
        </div>
      </div>
    </InfoWrapper>
  )
})
