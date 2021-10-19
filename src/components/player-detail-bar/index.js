import React, { memo } from 'react'

import { DetailBarWrapper } from "./style"

export default memo(function MJPlayerDetailBar(props) {
  const { favor, share, download, comment } = props

  return (
    <DetailBarWrapper>
      <span className="play">
        <a href="/#" className="play-icon sprite_button">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a> 
        <a href="/#" className="add-icon sprite_button">+</a>
      </span>
      <a href="/#" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favor}</i>
      </a>
      <a href="/#" className="item sprite_button">
        <i className="icon share-icon sprite_button">{share}</i>
      </a>
      <a href="/#" className="item sprite_button">
        <i className="icon download-icon sprite_button">{download}</i>
      </a>
      <a href="/#" className="item sprite_button">
        <i className="icon comment-icon sprite_button">{comment}</i>
      </a>
    </DetailBarWrapper>
  )
})
