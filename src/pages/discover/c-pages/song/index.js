import React, { memo, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {useDispatch } from 'react-redux'

import { getSongCategoryAction, getSongListAction, changeCurrentCategoryAction } from './store/actionCreators'

import MJSongHeader from "./c-cpns/song-header"
import MJSongMain from "./c-cpns/song-main"

import { SongsWrapper } from "./style"

export default memo(function MJSong() {
  const dispatch = useDispatch()
  const cat = useLocation().cat

  useEffect(() => {
    dispatch(changeCurrentCategoryAction(cat))
  }, [dispatch, cat])
  
  useEffect(() =>{
    dispatch(getSongCategoryAction());
    dispatch(getSongListAction(0))
  }, [dispatch])


  return (
    <SongsWrapper className="wrap-v2">
      <MJSongHeader />
      <MJSongMain />
    </SongsWrapper>
  )
})