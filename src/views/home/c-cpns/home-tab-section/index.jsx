import React, { memo, useEffect, useState, useCallback } from 'react'
import { HomeTabSectionWrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import RoomList from '@/components/room-list'
import FooterSection from '@/components/section-footer'

// tabs和roomList封装在一起的组件
const HomeTabSection = memo((props) => {
  const {data = {}} = props
  // 获取所有tab城市
  const cityNames = data.dest_address?.map(item => item.name)
  const initialName = cityNames?.[0]
  const [cityName, setName] = useState(initialName) // 设置初始城市
  /**
   * useState的初始化值只在组件第一次渲染时生效,第一次渲染时data没获取到数据，initialName必定是undefined, props更新后组件第二次渲染，useState初始化值不会再被设置
   * 方法2：未获取到initalName时不渲染组件 => initialName && {<RoomList />}
   */
  // 方法1：在useEffect内监听initalName(缺点：组件会渲染3次)
  useEffect(() => {
    setName(initialName)
  }, [initialName])

  // 子组件事件回调函数 根据点击的城市显示对应房源 useCallback是性能优化，防止组件渲染时重复创建函数
  const tabClickCallback = useCallback((cityName) => {
    setName(cityName)
  }, []) // useCallback依赖情况

  return (
    <HomeTabSectionWrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <SectionTabs cityNames={cityNames} tabClickCallback={tabClickCallback} />
      {/* 对应城市房源(动态cityName) */}
      <RoomList list={data.dest_list?.[cityName]} itemWidth='33.33%' />
      <FooterSection name={cityName} />
    </HomeTabSectionWrapper>
  )
})

export default HomeTabSection