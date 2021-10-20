import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import {getSimPlayListAction} from "../../store/actionCreator"

export default memo(function MJPlayerSongs() {
  const dispatch = useDispatch()

  const { simPlayList } = useSelector(state => ({
    simPlayList: state.getIn(["player", "simPlayList"])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getSimPlayListAction())
  }, [dispatch])

  return (
    <div>
      <h2>MJPlayerSongs</h2>
    </div>
  )
})
