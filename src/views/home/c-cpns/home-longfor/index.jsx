import React, { memo } from 'react'
import { LongForWrapper } from './style'
import LongForItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/components/scroll-view'

const HomeLongfor = memo((props) => {
  const {title, subtitle, list} = props.data
  return (
    <LongForWrapper>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="longfor-container">
        <ScrollView>
          {
            list && list.map((item, index) => {
              return <LongForItem data={item} key={index} />
            })
          }
        </ScrollView>
      </div>
    </LongForWrapper>
  )
})

export default HomeLongfor