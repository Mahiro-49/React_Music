import React, { memo,  } from 'react'

// import { useSelector, shallowEqual } from "react-redux"

// import { getSizeImage } from "@/utils/format-utils"

import {
  InfoWrapper,
  InfoLeft,
  InfoRight,
} from "./style"


export default memo(function MJPlayerInfo() {
  

  return (
    <InfoWrapper>
      <InfoLeft>
        <div className="left-top">
          <img src="" alt="" />
          <span className=""></span>
        </div>
        <div className="left-bottom">
          <i></i>
          <a href="/todo"> </a>
        </div>
      </InfoLeft>
      <InfoRight>
        <h2>right</h2>
      </InfoRight>
    </InfoWrapper>
  )
})
