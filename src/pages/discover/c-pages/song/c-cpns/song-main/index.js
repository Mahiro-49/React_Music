import React, { memo, useState } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { SongMainWrapper } from './style'
import { getSongListAction } from "../../store/actionCreators";

import MJSongsCover from '@/components/songs-cover'
import MJPageNation from '@/components/pagenation'

export default memo(function MJSongMain() {
  const [ currentPage, setCurrentPage ] = useState(1)

  const dispatch = useDispatch()
  const { categorySongs } = useSelector(state => ({
    categorySongs: state.getIn(['song', 'categorySongs'])
  }), shallowEqual)

  const songList = categorySongs.playlists || []
  const total = categorySongs.total || 0

  function onPageChange(page) {
    setCurrentPage(page)
    dispatch(getSongListAction(page))
  }

  return (
    <SongMainWrapper>
      <div className="songs-list">
        {
          songList.map((item, index) => {
            return (
              <MJSongsCover key={index} info={item} right="30px" />
            )
          })
        }
        <MJPageNation currentPage={currentPage}
                      total={total}
                      onPageChange={onPageChange}/>
      </div>
    </SongMainWrapper>
  )
})
