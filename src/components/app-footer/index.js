import React, { memo } from 'react'

import {
  footerLinks,
  footerImages
} from "@/common/local-data"

import {
  FooterLeft,
  FooterWrapper,
  FooterRight
} from './style'

export default memo(function MJAppFooter() {

  const showServiceItems = (item, index) => {
    return <a href={item.link}>{item.title}</a>
  }


  return (
    <FooterWrapper>
      <div className="wrap-v2 content">
        <FooterLeft>
          <div className="footer-link">
            {
              footerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="link-item">
                    {showServiceItems(item, index)}
                  </div>
                )
              })
            }
          </div>
          <div className="footer-1">网易公司版权所有©1997-2021 &nbsp;&nbsp;杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</div>
          <div className="footer-1">违法和不良信息举报电话：0571-89853516  &nbsp;&nbsp; 举报邮箱：ncm5990@163.com</div>
          <div className="footer-1">粤B2-20090191-18&nbsp;&nbsp; 工业和信息化部备案管理系统网站&nbsp;&nbsp; 浙公网安备 33010902002564号</div>
        </FooterLeft>
        <FooterRight>
          {
            footerImages.map((item, index) => {
              return (
                <li className="item" key={item.link}>
                  <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"></a>
                  <span className="title"></span>
                </li>
              )
            })
          }
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
