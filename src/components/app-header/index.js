import React, { memo } from 'react'

import { headerLinks } from "@/common/local-data"

import { NavLink } from "react-router-dom"
import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight,
} from './style'

export default memo(function MJAppHeader() {

  // 路由跳转
  const showSelectItem = (item, index) => {
    // 前三个为路由跳转
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {   // 其他的为跳转页面 用a元素
      return <a href={item.link}>{item.title}</a>
    }
  }


  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01"> </a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="input-1" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <button className="center">创作者中心</button>
          <button className="login">登录</button>
            
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
