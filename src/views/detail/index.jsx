import React, { memo, useState } from 'react'
import { DetailWrapper } from './style'
import { useSelector } from 'react-redux'
import PicBanner from '@/components/pic-banner'

const Detail = memo(() => {
  const state = useSelector((state) => {
    return {
      detailInfo: state.detail.detailInfo
    }
  })
  const [isShowBanner, setShowState] = useState(false)
  function handleClick () {
    setShowState(true)
  }
  return (
    <DetailWrapper>
      <div className="pictures">
        {/* 左边第1张图 */}
        <div className="left">
          <div className="left-item" onClick={() => handleClick()}>
            <div className="cover"></div>
            <img src={state.detailInfo?.picture_urls?.[0]} alt="" />
          </div>
        </div>
        {/* 右边的4张图 */}
        <div className="right">
          {
            state.detailInfo?.picture_urls && state.detailInfo.picture_urls.slice(1, 5).map((item, index) => {
              return (
                <div className='right-item' key={index} onClick={() => handleClick()}>
                  <div className="cover"></div>
                  <img src={item} alt="" />
                </div>
              )
            })
          }
        </div>
        <div className="show-btn" onClick={() => setShowState(true)}>查看照片</div>
      </div>
      {/* 图片画廊组件 组件关闭时回调函数，触发关闭 */}
      {isShowBanner && <PicBanner handleClose={e => setShowState(false)} />} 
    </DetailWrapper>
  )
})

export default Detail