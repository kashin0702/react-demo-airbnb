import React, { memo, useState } from 'react'
import { HeaderWrapper, SearchBarWrapper } from './style'
import HeaderLeft from './c-cpns/left/left'
import HeaderRight from './c-cpns/right/right'
import HeaderCenter from './c-cpns/center/center'
import { shallowEqual, useSelector } from 'react-redux'

const AppHeader = memo(() => {
  // 获取头部定位方式，根据进入页面的不同，设置是否fixed
  const state = useSelector((state) => {
    return {
      isFixed: state.main.headerConfig.isFixed
    }
  }, shallowEqual)
  const [isSearch, setIsSearch] = useState(true)
  return (
    // 动态插入fixed样式
    <HeaderWrapper className={`${state.isFixed ? 'fixed' : ''}`}> 
      <div className="content">
        {/* 左侧logo组件 */}
        <HeaderLeft></HeaderLeft>
        {/* 中间输入框组件 */}
        <HeaderCenter onSearch={setIsSearch} isSearch={isSearch}></HeaderCenter>
        {/* 右侧登录注册等按钮 */}
        <HeaderRight></HeaderRight>
      </div>

      {/* 样式变换时加高背景样式，有动画效果所以要用css包裹, 不能直接用&&表达式，无法实现动画 */}
      <SearchBarWrapper isSearch={isSearch}>
        <div className="search-bar"></div>
      </SearchBarWrapper>
      {/* 样式变换时加遮罩层 */}
      {isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>} 
    </HeaderWrapper>
  )
})

export default AppHeader