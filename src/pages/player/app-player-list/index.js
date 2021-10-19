import React, { memo, useRef, useEffect } from 'react'

import { useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames';

import { formatMinuteSecond } from "@/utils/format-utils"
import { scrollTo } from "@/utils/ui-help"

import { 
  PlayerListWrapper,
} from "./style"

export default memo(function MJAppPlayerList() {

  const { playList, currentSongIndex, lyricList, currentLyricIndex } = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSongIndex: state.getIn(["player", "currentSongIndex"]),
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
  }), shallowEqual)

  const panelRef = useRef()
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 500)
  }, [currentLyricIndex])


  return (
    <PlayerListWrapper>
      <div className="header">
        <div className="header-left">
          <div>播放列表 <span>(5)</span></div>
          <div className="operator">
            <a href="/todo"><span className="sprite_playlist icon favor"></span>收藏全部</a>
            <a href="/todo"><span  className="sprite_playlist icon delete"></span>删除</a>
          </div>
        </div>
        <div className="header-right">
          <i className="title">{"你好"}</i>
          <i className="close">X</i>
        </div>
      </div>
      <div className="main">
        <div className="main-list">
          {
            playList.map((item, index) => {
              return (
                <div key={item.id} className={classNames("play-item", {"active": currentSongIndex === index})}>
                  <div className="left">{item.name}</div>
                  <div className="right">
                    <span className="singer">{item.ar[0].name}</span>
                    <span className="duration">{formatMinuteSecond(item.dt)}</span>
                    <span className="link sprite_playlist"></span>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="main-lyric" ref={panelRef}>
          <div className="content">
            {
              lyricList.map((item, index) => {
                return (
                  <div key={item.time} className={classNames("item", {"active": index === currentLyricIndex})}>
                    {item.content}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </PlayerListWrapper>
  )
})
