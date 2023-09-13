import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// 本组件样式
import { HomeWrapper } from './style'
// action网络请求
import { fetchHomeDataAction } from '../../store/modules/home'
// 各类子组件
import HomeBanner from './c-cpns/home-banner'
import HomeSection from './c-cpns/home-section'
import HomeTabSection from './c-cpns/home-tab-section'
import HomeLongfor from './c-cpns/home-longfor'
import { changeHeaderConfigAction } from '../../store/modules/main'

const Home = memo(() => {
  const dispatch = useDispatch()
  // 重点：网络请求=> 在useEffect中进行数据请求
  useEffect(() => {
    // 派发store中的异步action，进行网络请求
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({isFixed: true})) // 头部组件样式自定义
  }, [dispatch])

  // 通过hooks映射store中的数据
  const state = useSelector((state) => {
    // return的值就是要映射的数据
    return {
      tabsInfo: state.home.tabsInfo,
      goodPrice: state.home.goodPriceInfo,
      highScore: state.home.highScoreInfo,
      longForData: state.home.longForData
    }
  }, shallowEqual) // 数据浅拷贝比较，不同时才重新渲染


  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="module">
        {/* 向往城市 */}
        <HomeLongfor data={state.longForData} />
        {/* tab-room整体封装组件 */}
        <HomeTabSection data={state.tabsInfo} />
        {/* 高分房源 */}
        <HomeSection data={state.highScore}/>
        {/* 高性价比房源 */}
        <HomeSection data={state.goodPrice}/>
      </div>
    </HomeWrapper>
  )
})

export default Home