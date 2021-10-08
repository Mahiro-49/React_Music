import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux"

import MJHeaderSmall from "@/components/theme-header-small"

import { SettleSingerWrapper } from "./style"

import { getSizeImage } from "@/utils/format-utils"

import { getArtistListAction } from "../../store/actionCreators"

export default memo(function MJSinger() {
  const { artistList } = useSelector(state => ({
    artistList: state.getIn(["recommend", "artistList"])
  }), shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistListAction())
  }, [dispatch])

  return (
    <SettleSingerWrapper>
      <MJHeaderSmall title="入驻歌手" more="查看全部 >" />
      <div className="singer-list">
        {
          artistList.map(item => {
            return (
              <a href="/singer" key={item.id} className="item">
                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                <div className="info">
                  <div className="title">{item.alias.join("") || item.name}</div>
                  <div className="name">{item.name}</div>
                </div>
              </a>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/abc">
          申请成为网易音乐人
        </a>
      </div>
    </SettleSingerWrapper>
  )
})
