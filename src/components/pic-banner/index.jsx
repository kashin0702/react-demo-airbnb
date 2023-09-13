import React, { memo, useState } from 'react'
import { PicBannerWrapper } from './style'
import IconClose from '../../assets/svg/IconClose'
import ArrowLeft from '../../assets/svg/ArrowLeft'
import ArrowRight from '../../assets/svg/ArrowRight'
import { useSelector } from 'react-redux'
import {SwitchTransition, CSSTransition} from 'react-transition-group'
import Indicator from '../indicator'

// 图片画廊组件
const PicBanner = memo((props) => {
  const state = useSelector((state) => {
    return {
      detailInfo: state.detail.detailInfo
    }
  })
  const handleClose = () => {
    props.handleClose() // 回调关闭页面
  }
  const [picIndex, setPicIndex] = useState(0) // 默认显示第一张图片
  const [action, setAction] = useState('next') // 保存下一页、上一页动作，显示相应动画效果
  const [showIndicator, setShowIndicator] = useState(true) // 显示或隐藏底部indicator组件
  function changePic (action) {
    let newIndex = picIndex
    if (action === 'prev') {
      newIndex--
      if (newIndex < 0) {
        newIndex = state.detailInfo.picture_urls.length - 1
      }
      setAction('prev')
    }
    if (action === 'next') {
      newIndex++
      if (newIndex > state.detailInfo.picture_urls.length - 1) {
        newIndex = 0
      }
      setAction('next')
    }
    setPicIndex(newIndex)
  }
  return (
    <PicBannerWrapper action={action}>
      <div className="top">
        <div className="close-btn" onClick={handleClose}>
          <IconClose />
        </div>
      </div>
      <div className="main">
        <div className="control">
          <div className="left" onClick={() => changePic('prev')}>
            <ArrowLeft width={77} height={77}  />
          </div>
          <div className="right" onClick={() => changePic('next')}>
            <ArrowRight width={77} height={77} />
          </div>
        </div>
        <div className='container'>
          <SwitchTransition mode='in-out'>
            {/* 只要Key不同，两个内容切换就有效果 */}
            <CSSTransition key={state.detailInfo.picture_urls[picIndex]} timeout={500} classNames="switch">
              <img src={state.detailInfo.picture_urls[picIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="list">
          <div className="desc">
            <div className="count">
              <span>10/30:roomapartment</span><span>图片10</span>
            </div>
            <div className="toggle" onClick={() => setShowIndicator(!showIndicator)}>{showIndicator ? '隐藏' : '显示'}照片列表</div>
          </div>
                                          {/* height要设置具体值不能设置auto transition会无效 */}
          <div className='indicator' style={{height: showIndicator ? '67px' : '0'}}>
            <Indicator selectIndex={picIndex}>
              {state.detailInfo.picture_urls && state.detailInfo.picture_urls.map((item, index) => {
                return (
                  <div className={`indicator-item ${index === picIndex ? 'active' : ''}`} key={index}>
                    <img src={item} alt="" onClick={() => setPicIndex(index)} /> 
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </PicBannerWrapper>
  )
})

export default PicBanner