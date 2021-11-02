import React, { memo,useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { HeaderWrapper } from "./style"

import MJSongCategory from "../song-category"

export default memo(function MJSongHeader() {
  const [isShow, setIsShow] = useState(false)

  const { currentCategory } = useSelector(state => ({
    currentCategory: state.getIn(['song', 'currentCategory'])
  }), shallowEqual)

  return (
    <HeaderWrapper>
      <div className="left">
        <h1>{currentCategory ? currentCategory : '全部'}</h1>
        <button className="sprite_button2 select" onClick={e => setIsShow(!isShow)}>选择分类</button>
        { isShow ? <MJSongCategory /> : ''}
      </div>
      <button className="right sprite_button2">热门</button>
    </HeaderWrapper>
  )
})
