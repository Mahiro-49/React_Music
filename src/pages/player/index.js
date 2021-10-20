import React, { memo } from 'react'

import MJPlayerInfo from "./c-cpns/player-info"
import MJPlayerComment from "./c-cpns/player-comment"
import MJPlayerRelevant from "./c-cpns/player-relevant"
import MJPlayerSongs from "./c-cpns/player-songs"

import {
  PlaybarWrapper,
  PlayerLeft,
  PlayerRight,
} from "./style"

export default memo(function MJPlayer() {
  return (
    <PlaybarWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <MJPlayerInfo />
          <MJPlayerComment />
        </PlayerLeft>
        <PlayerRight>
          <MJPlayerSongs />
          <MJPlayerRelevant />
        </PlayerRight>
      </div>
    </PlaybarWrapper>
  )
})
