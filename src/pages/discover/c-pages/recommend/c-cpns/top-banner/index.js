import React, { memo, useCallback, useState, useEffect, useRef } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd';

import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  Control
} from './style'

export default memo(function MJTopBanner() {
  // 设置state 保存轮播图当前的index
  const [currentIndex, setCurrentIndex] = useState(0)

  // 组件和redux关联： 获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual);
  
  const dispatch = useDispatch();


  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch]);

  // 绑定轮播图组件
  const bannerRef = useRef();

  // 使用useCallback让回调函数有个记忆缓存 不会让组件随便刷新
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, [])

  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20 ")

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay="true" ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img src={item.imageUrl} alt={item.typeTitle} className="image"/>
                  </div>
                )
              })
            }
          </Carousel>,

        </BannerLeft>
        <BannerRight></BannerRight>
        <Control>
            <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
            <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </Control>
      </div>
    </BannerWrapper>
  )
})
