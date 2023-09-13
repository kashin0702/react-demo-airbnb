import React, { memo } from 'react'
import { HomeSectionWrapper } from './style'
// 标题
import SectionHeader from '@/components/section-header'
// 房间列表
import RoomList from '@/components/room-list'
import FooterSection from '@/components/section-footer'

// 二次封装标题和房间列表
const HomeSection = memo((props) => {
  const {data} = props
  return (
    <HomeSectionWrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <RoomList list={data.list} />
      <FooterSection />
    </HomeSectionWrapper>
  )
})

export default HomeSection