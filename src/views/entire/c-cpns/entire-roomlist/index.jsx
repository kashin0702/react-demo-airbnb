import React, { memo, useEffect } from 'react'
import {RoomListWrapper} from './style'
import { useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import {changeDetailInfoAction} from '@/store/modules/detail'
import { changeHeaderConfigAction } from '../../../../store/modules/main'

const EntireRoomList = memo(() => {
  // 获取redux数据
  const state = useSelector(state => {
    return {
      roomList: state.entire.roomList
    }
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClick = (data) => {
    console.log('itemClick==>', data)
    // store保存detail数据
    dispatch(changeDetailInfoAction(data))
    navigate('/detail')
  }
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed: false}))
  }, [dispatch])
  return (
    <RoomListWrapper>
      {
        state.roomList && state.roomList.map(item => {
          return (
            <RoomItem data={item} itemWidth='20%' key={item._id} itemClick={itemClick}/> // 跳转到详情页，由外部传入
          )
        })
      }
    </RoomListWrapper>
  )
})

export default EntireRoomList