import React, { memo, useEffect, useRef } from 'react'

import { useDispatch, useSelector, shallowEqual } from "react-redux"

import MJHeaderRCM from "@/components/theme-header-rcm"
import MJAlbumCover from "@/components/album-cover"

import { getNewAlbumAction } from "../../store/actionCreators"

import { AlbumWrapper } from "./style"

import { Carousel } from 'antd';

export default memo(function MJNewAlbum() {
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)
  const dispatch = useDispatch();

  const pageRef = useRef()

  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <MJHeaderRCM title="新碟上架" />
        <div className="content">
          <div className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()}></div>
          <div className="album">
            <Carousel dots={false} ref={pageRef}>
              {
                [0, 1].map(item => {
                  return (
                    <div key={item} className="page">
                      {
                        newAlbums.slice(item*5, (item + 1)*5).map(iten => {
                          return (
                            <MJAlbumCover key={iten.id} info={iten} size={100} width={118} bgp="-570px"/>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
          <div className="arrow arrow-right sprite_02" onClick={e => pageRef.current.prev()}></div>
        </div>
    </AlbumWrapper>

  )
})
