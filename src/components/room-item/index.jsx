import React, { memo, useState } from 'react'
import { RoomWrapper } from './style'
// mui打星组件
import { Rating } from '@mui/material'
// antd走马灯组件（轮播图）
import { Carousel } from 'antd'
import ArrowLeft from '../../assets/svg/ArrowLeft'
import ArrowRight from '../../assets/svg/ArrowRight'
import Indicator from '../indicator'
import { useRef } from 'react'

const index = memo((props) => {
  const {data, itemWidth, itemClick} = props
  const sliderRef = useRef()

  const [selectIndex, setIndex] = useState(0) // 保存dot的索引
  // 点击上一页，下一页事件
  function sliderChange (direction, event) {
    event.stopPropagation() // 防止父元素页面跳转
    let newIndex = null // 记录dot索引值，传给indicator组件，实现对应index的dot滚动
    if (direction === 'next') {
      newIndex = selectIndex + 1
      // 边界值处理
      if (newIndex > data.picture_urls.length - 1) {
        newIndex = 0
      }
      setIndex(newIndex)
      sliderRef.current.next() // Carousel组件自带的方法
    }
    if (direction === 'prev') {
      newIndex = selectIndex -1
      // 边界值处理
      if (newIndex < 0) {
        newIndex = data.picture_urls.length - 1
      }
      setIndex(newIndex)
      sliderRef.current.prev()
    }
  }

  // 只有一张图时显示单个元素
  const oneImgElement = (
    <div className='cover'>
      <img src={data.picture_url} alt='房间照片' />
    </div>
  )
  

  // 有多张图时显示轮播效果
  const sliderImgElement = (
    // slider容器包裹carousel， 防止左右按钮和dot在轮播时和页面一起滚动
    <div className="slider">
      <div className="control">
        <div className="left" onClick={e => sliderChange('prev', e)}><ArrowLeft /></div>
        <div className="right" onClick={e => sliderChange('next', e)}><ArrowRight /></div>
      </div>
      <div className="dot">
        <Indicator selectIndex={selectIndex}>
            {
              data.picture_urls && data.picture_urls.map((item, index) => {
                return (
                  <div className='dot-container' key={index}>
                    <span className={`dot-item ${index === selectIndex ? 'active' : ''}`}></span>
                  </div>
                )
              })
            }
        </Indicator>
      </div>

      <Carousel ref={sliderRef} dots={false}>
        {
          data.picture_urls && data.picture_urls.map((item, index) => {
            return (
              <div className='cover' key={index}>
                <img src={item} alt="房间照片" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )

  // 首页没有跳转功能，entire页有，所以这个跳转功能由外面传入
  const toDetail = (data) => {
    if (itemClick) itemClick(data) // 把跳转的数据传出给entire页，再通过store保存
  }
  return (
    <RoomWrapper color={data.verify_info.text_color} itemWidth={itemWidth} onClick={() => toDetail(data)}>
      {
        // 增加判断分别加载不同的元素，兼容首页单张图和entire页的轮播图
        data.picture_urls ? sliderImgElement : oneImgElement
      }
      <div className="title">{data.verify_info.messages.join('·')}</div>
      <div className='desc'>{data.name}</div>
      <div className="price">{'¥'+data.price+'/晚'}</div>
      <div className="rating">
        {/* 打星组件 sx属性可以传入样式 precision：星的精确度 */}
        <Rating value={data.star_rating} precision={0.5} readOnly sx={{fontSize: '12px', color: data.star_rating_color}}></Rating>
        <span style={{fontSize: '12px'}}>{data.reviews_count}</span>
        {data.bottom_info && <span style={{fontSize: '12px'}}>·{data.bottom_info.content}</span>}
      </div>
    </RoomWrapper>
  )
})

export default index