import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination'; // mui分页器组件导入
import { useDispatch, useSelector } from 'react-redux';
import {changeCurrentPageAction, fetchRoomListDataAction} from '@/store/modules/entire'

const EntirePagination = memo(() => {
  const dispatch = useDispatch()
  const state = useSelector(state => {
    return {
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage
    }
  })
  const onChange = (event, page) => {
    dispatch(changeCurrentPageAction(page)) // 保存点击的页面
    const pageParams = {
      offset: (page - 1) * 20, // 请求对应页码数据 注意offset是偏移量，页码*size就是偏移量
      size: 20
    }
    dispatch(fetchRoomListDataAction(pageParams)) // 这个函数接收的是一个对象
    window.scrollTo(0,0) // 回到滚动条顶部
  }
  const startPage = (state.currentPage - 1) * 20 + 1  // 20就是每页的size
  const endPage = state.currentPage * 20
  const totalPage = Math.ceil(state.totalCount / 20)
  return (
    <PaginationWrapper>
      <div className="pagination-container">
        <Pagination count={totalPage} onChange={onChange} />
        <div className="info">
          第{startPage} - {endPage} 个房源，共超过{state.totalCount}个
        </div>
      </div>
    </PaginationWrapper>
  )
})

export default EntirePagination