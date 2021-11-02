import React, { memo } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { CategoryWrapper } from './style'

import { changeCurrentCategoryAction, getSongListAction } from '../../store/actionCreators'

export default memo(function MJSongCategory() {
  const dispatch = useDispatch()
  const { category } = useSelector(state => ({
    category: state.getIn(['song', 'category'])
  }), shallowEqual)

  function changeCategory(name) {
    dispatch(changeCurrentCategoryAction(name))
    dispatch(getSongListAction(0))
    console.log(category);
  }

  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link" onClick={e => changeCategory('全部')}>全部风格</span>
      </div>
      <div className="category">
        {
          category.map((item, index) => {
            return (
              <dl key={item.name} className={'item' + index}>
                <dt>
                  <i className="icon sprite_icon2"></i>
                  <span>{item.name}</span>
                </dt>
                <dd>
                  {
                    item.subs.map(nItem => {
                      return (
                        <div className="item" key={nItem.name}>
                          <span className="link" onClick={e => changeCategory(nItem.name)}>{nItem.name}</span>
                          <span className="divider">|</span>
                        </div>
                      )
                    })
                  }
                </dd>
              </dl>
            )
          })
        }
      </div>
    </CategoryWrapper>
  )
})
