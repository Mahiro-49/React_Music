import React, { memo, useEffect } from 'react'

import { useSelector, shallowEqual, useDispatch } from "react-redux"

import { getSimiSongAction } from "../../store/actionCreator"

import { PlayerRelevant } from "./style"

export default memo(function MJPlayerRelevant() {
  const dispatch = useDispatch()

  const { simiSong } = useSelector(state => ({
    simiSong: state.getIn(["player", "simiSong"])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getSimiSongAction())
  }, [dispatch])

  return (
    <PlayerRelevant>
      <div className="same-songs">
        <span className="similar">相似歌曲</span>
      </div>
      <div className="songs-list">
        {
          simiSong.map((item, index) => {
            return (
              <div className="song-item" key={item.id}>
                <div className="info">
                  <div className="info-name">{item.name}</div>
                  <div className="info-singer">{item.artists[0].name}</div>
                </div>
                <div className="icon">
                  <i className="play sprite_icon3 item"></i>
                  <i className="add sprite_icon3 item"></i>
                </div>
              </div>
            )
          })
        }
      </div>
    </PlayerRelevant>
  )
})
