import {
  getSongDetail,
} from "@/services/player"

import * as actionTypes from "./constants"

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
})

const changeLyricAction = (Lyric) => ({
  type: actionTypes.CHANGE_LYRIC,
  Lyric
})

const changePlaylistAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const changeCurrentSong = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"])
    const sequence = getState().getIn(["player", "sequence"])
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"])

    switch (sequence) {
      case 1: // 随机播放
        let randomIndex = -1
        while (randomIndex === currentSongIndex) {
          randomIndex = Math.floor(Math.random() * playList.length)
        }
        currentSongIndex = randomIndex;
        break;
      default: // 顺序播放
        currentSongIndex += tag
        if (currentSongIndex >= playList.length) currentSongIndex = 0
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1
    }

    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSong))
  }
}

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 1.根据id查找playlist中是否已经有该歌曲
    const playList = getState().getIn(["player", "playList"])
    const songIndex = playList.findIndex(song => song.id === ids);

    // 2.判断是否找到歌曲
    if (songIndex !== -1) {   // 找到歌曲
      dispatch(changeCurrentSongIndexAction(songIndex));
      const song = playList[songIndex];
      dispatch(changeCurrentSongAction(song))
    } else {   //没有找到歌曲
      // 请求歌曲数据
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0]
        if (!song) return;

        // 1.将最新请求的歌曲添加到播放列表中
        const newPlaylist = [...playList];
        newPlaylist.push(song)

        // 2.更新redux中的值
        dispatch(changePlaylistAction(newPlaylist));
        dispatch(changeCurrentSongIndexAction(newPlaylist.length - 1));
        dispatch(changeCurrentSongAction(song))
      })

    }

  }
}

