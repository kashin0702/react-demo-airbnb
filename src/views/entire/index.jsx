import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRoomList from './c-cpns/entire-roomlist'
import EntirePagination from './c-cpns/entire-pagination'
import filterList from '../../data/filter.json'
import { useDispatch } from 'react-redux'
import { fetchRoomListDataAction } from '@/store/modules/entire'


const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    const pageParams = {
      offset: 0,
      size: 20
    }
    dispatch(fetchRoomListDataAction(pageParams))
  }, [dispatch])
  return (
    <EntireWrapper>
      {/* 头部过滤器 */}
      <EntireFilter list={filterList}/>
      {/* 房间数据 */}
      <EntireRoomList />
      {/* 底部分页器 */}
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire