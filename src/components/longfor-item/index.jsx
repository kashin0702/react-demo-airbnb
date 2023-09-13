// 向往城市独立组件
import React, { memo } from 'react'
import { LongForItemWrapper } from './style'

const LongForItem = memo((props) => {
  const {data = {}} = props 
  return (
    <LongForItemWrapper>
      <div className="cover">
        <div className="mb"></div>
        <img src={data.picture_url} alt="" />
      </div>
      <div className='city'>
        <div className="name">{data.city}</div>
        <div className="price">{data.price}</div>
      </div>
    </LongForItemWrapper>
  )
})

export default LongForItem