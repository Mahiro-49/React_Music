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
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWraper>
  )
}


export default memo(MJRecommend)