import React, { memo } from 'react'
import { RoomWrapper } from './style'
import RoomItem from '@/components/room-item'

const RoomList = memo((props) => {
  const {list, itemWidth = '25%' } = props
  return (
    <RoomWrapper>
      {
        list && list.map(item => {
          return (
            <RoomItem data={item} itemWidth={itemWidth} key={item.id} />
          )}
        )
      }
    </RoomWrapper>
  )
})

export default RoomList