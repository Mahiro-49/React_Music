import React, { memo } from 'react'

import { Pagination } from 'antd';

import { PageNationWrapper } from './style'

export default memo(function MJPageNation(props) {
  const { currentPage, total, onPageChange } = props

  function itemRender(current, type, originai) {
    if (type === 'prev') {
      return <button className="control prev">&lt; 上一页</button>
    }
    if (type === 'next') {
      return <button className="control next">下一页 &gt; </button>
    }
    return originai
  }
  return (
    <PageNationWrapper>
      <Pagination className="pagination"
                  size="small"
                  current={currentPage}
                  total={total} 
                  pageSize={35}
                  showSizeChanger={false}
                  onChange={onPageChange}
                  itemRender={itemRender}/>
    </PageNationWrapper>
  )
})
