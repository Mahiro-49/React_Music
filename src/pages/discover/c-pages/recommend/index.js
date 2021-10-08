import React, { memo } from 'react'

import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style"

import MJTopBanner from "./c-cpns/top-banner"
import MJHotRecommend from "./c-cpns/hot-recommend"
import MJNewAlbum from "./c-cpns/new-album"
import MJRanking from "./c-cpns/recommend-ranking"

import MJHotAnchor from "./c-cpns/hot-anchor"
import MJSinger from "./c-cpns/settle-singer"
import MJLogin from "./c-cpns/user-login"

function MJRecommend(props) {


  return (
    <RecommendWraper>
      <MJTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <MJHotRecommend />
          <MJNewAlbum />
          <MJRanking />
        </RecommendLeft>
        <RecommendRight>
          <MJLogin />
          <MJSinger />
          <MJHotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWraper>
  )
}


export default memo(MJRecommend)