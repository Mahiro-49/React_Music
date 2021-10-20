import React, { memo, useEffect } from 'react'

import { useSelector, shallowEqual, useDispatch } from "react-redux"

import { getSimiSongAction } from "../../store/actionCreators"

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
      
    </PlayerRelevant>
  )
})
