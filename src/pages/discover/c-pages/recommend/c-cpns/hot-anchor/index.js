import React, { memo } from 'react'

import MJHeaderSmall from "@/components/theme-header-small"

import {HotAnchorWrapper} from "./style"

import { hotRadios } from "@/common/local-data"

export default memo(function MJHotAnchor() {
  return (
    <HotAnchorWrapper>
      <MJHeaderSmall title="热门主播" />
      <div className="anchor-list">
        {
          hotRadios.map(item => {
            return (
              <div className="item" key={item.picUrl}>
                <a href="/abc" className="image">
                  <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotAnchorWrapper>
  )
})
