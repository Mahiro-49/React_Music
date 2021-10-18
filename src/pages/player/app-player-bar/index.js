import React, { memo, useEffect, useRef, useState, useCallback } from 'react'

import { useDispatch, useSelector, shallowEqual } from "react-redux"

import { NavLink } from "react-router-dom"

import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction
} from "../store/actionCreator"

import { getSizeImage, formatDate, getPlayUrl } from "@/utils/format-utils"

import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator,
} from "./style"

import { Slider, message } from 'antd';

import MJAppPlayerList from "../app-player-list"



export default memo(function MJAppPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChange, setIsChange] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isShowList, setIsShowList] = useState(false)

  const {
    currentSong,
    sequence,
    lyricList,
    currentLyricIndex
  } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(["player", "sequence"]),
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
  }), shallowEqual)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id)
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    })
  }, [currentSong])

  const audioRef = useRef()

  // 当al中有值再取里面的picUrl否则给默认值
  const picUrl = currentSong.al ? currentSong.al.picUrl : '';
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '';
  const duration = currentSong.dt || 0
  // 总时间处理
  const showDuration = formatDate(duration, "mm:ss")
  // 当前时间处理
  const showCurrentTime = formatDate(currentTime, "mm:ss")

  // function
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime
    if (!isChange) {
      setCurrentTime(currentTime * 1000)
      setProgress(currentTime * 1000 / duration * 100)
    }

    // 获取当前歌词
    let i = 0
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i]
      if (currentTime * 1000 < lyricItem.time) {
        break;
      }
    }

    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1))
      const content = lyricList[i - 1] && lyricList[i - 1].content
      message.open({
        key: "lyric",
        content: content,
        duration: 0
      })
    }

  }

  const changeSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence))
  }

  // 单曲循环
  const handleMusicEnded = () => {
    if (sequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeSequenceAction(1))
    }
  }

  // 用useCallback只有当依赖的值发生改变才会发生重绘 传到自定义组件的时候用
  const sliderChange = useCallback((value) => {
    setIsChange(true)
    // 滑动时改变当前进度时间
    const currentTime = value / 100 * duration
    setCurrentTime(currentTime)

    setProgress(value)
  }, [duration])

  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    // 解决进度条回弹bug 将当前时间重新设置并且要乘以1000
    setCurrentTime(currentTime * 1000)
    setIsChange(false)

    if (!isPlaying) {
      playMusic()
    }
  }, [duration, isPlaying, playMusic])

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player btn prev"
            onClick={e => dispatch(changeCurrentIndexAndSongAction(-1))}></button>
          <button className="sprite_player btn play" onClick={e => playMusic()}></button>
          <button className="sprite_player btn next"
            onClick={e => dispatch(changeCurrentIndexAndSongAction(1))}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discovery/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={e => changeSequence()}></button>
            <button className="sprite_player btn playlist" onClick={e => setIsShowList(!isShowList)}></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={e => handleMusicEnded()} />
      {isShowList && <MJAppPlayerList />}
    </PlaybarWrapper>
  )
})
