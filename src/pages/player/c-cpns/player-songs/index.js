import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getSimPlayListAction } from "../../store/actionCreator"

import { getSizeImage } from '@/utils/format-utils';

import { PlaySongWrapper } from "./style"

export default memo(function MJPlayerSongs() {
  const dispatch = useDispatch()

  const { simPlayList } = useSelector(state => ({
    simPlayList: state.getIn(["player", "simPlayList"])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getSimPlayListAction())
  }, [dispatch])

  return (
    <PlaySongWrapper>
      <div className="song-list">
        <span>包含这首歌的歌单</span>
      </div>
      {
        simPlayList.map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <span className="image">
                <img src={getSizeImage(item.coverImgUrl, 50)} alt="" />
              </span>
              <div className="all-name text-nowrap">
                <a href="/todo" className="name">{item.name}</a>
                <div className="nickname">by {item.creator.nickname}</div>
              </div>
            </div>
          )
        })
      }
    </PlaySongWrapper>
  )
})
