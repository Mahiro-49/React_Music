import React, { memo, useEffect } from 'react'
import classNames from "classnames";

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getSizeImage } from "@/utils/format-utils";

import { TopRankingWrapper } from "./style"

import { getRankingListAction, changeCurrentIndexAction } from "../../store/actionCreator"

export default memo(function MJTopRanking() {
  const dispatch = useDispatch()

  const { topList, currentIndex } = useSelector(state => ({
    topList: state.getIn(["ranking", "topList"]),
    currentIndex: state.getIn(["ranking", "currentIndex"])
  }), shallowEqual)

  useEffect(() => {
    const id = (topList[currentIndex] && topList[currentIndex].id)
    if (!id) return
    dispatch(getRankingListAction(id))
  }, [topList, currentIndex, dispatch])

  const hanldeItemClick = (index) => {
    dispatch(changeCurrentIndexAction(index));
    const id = topList[currentIndex].id;
    dispatch(getRankingListAction(id))
  }

  return (
    <TopRankingWrapper>
      {
        topList.map((item, index) => {
          let header;
          if (index === 0 || index === 4) {
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          }
          return (
            <div key={item.id}>
              {header}
              <div className={classNames("item", { "active": index === currentIndex })}
                onClick={e => hanldeItemClick(index)}>
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </TopRankingWrapper>
  )
})
