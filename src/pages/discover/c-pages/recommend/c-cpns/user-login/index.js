import React, { memo } from 'react'

import {LoginWrapper} from "./style"

export default memo(function MJLogin() {
  return (
    <LoginWrapper className="sprite_02">
      <p className="font">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a className="login sprite_02" href="/todo">用户登录</a>
    </LoginWrapper>
  )
})
