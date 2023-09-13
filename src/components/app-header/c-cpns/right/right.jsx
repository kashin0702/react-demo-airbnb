import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '../../../../assets/svg/IconGlobal'
import IconAvatar from '../../../../assets/svg/IconAvatar'
import IconMenu from '../../../../assets/svg/IconMenu'

const HeaderRight = memo(() => {
  const [isShowPanel, setShowPanel] = useState(false)
  const handlePanel = () => {
    setShowPanel(true)
  }
  // 监听整个window或document点击，隐藏panel
  useEffect(() => {
    const windowClick = () => {
      setShowPanel(false)
    }
    document.addEventListener('click', windowClick, true) // 这里使用捕获模式，防止冒泡后触发profile的事件
    return () => {
      document.removeEventListener('click', windowClick) // 卸载页面时取消监听
    }
  }, [])
  return (
    <RightWrapper>
      <div className="btns">
        <div className="item">登录</div>
        <div className="item">注册</div>
        <div className="item">
          <IconGlobal></IconGlobal>
        </div>
      </div>
      <div className="profile" onClick={handlePanel}>
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>
        {/* 登录框 根据click动态显示 */}
        {isShowPanel && (
          <div className="panel">
            <div className="item">注册</div>
            <div className="item">登录</div>
            <div className="item">来爱彼迎发布房源</div>
            <div className="item">开展体验</div>
            <div className="item">帮助</div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight