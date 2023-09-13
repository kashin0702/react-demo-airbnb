import React, { memo, useState } from 'react'
import ScrollView from '../scroll-view'

const SectionTabs = memo((props) => {
  const {cityNames = [], tabClickCallback} = props
  // 点击索引激活样式
  const [currentIndex, setCurrentIndex] = useState(0)
  const tabClick = (index, name) => {
    setCurrentIndex(index)
    tabClickCallback(name)
  }
  return (
    // 用scrollView包裹要滚动的组件，包裹的就是插槽的内容
    <ScrollView>
      {
        cityNames.map((name, index)=> {
          return (
            <div className='tab-item' style={currentIndex === index ? { background: '#008489', color: '#fff' } : {}} key={index} onClick={e => tabClick(index, name)}>{name}</div>
          )
        })
      }
    </ScrollView>
  )
})

export default SectionTabs