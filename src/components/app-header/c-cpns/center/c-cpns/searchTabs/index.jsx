import React, { memo } from 'react'
import {SearchTabsWrapper} from './style'

const index = memo((props) => {
  const {tabs, selectedIndex, tabClick} = props
  const handleClick = (index) => {
    if (tabClick) tabClick(index)
  }
  return (
    <SearchTabsWrapper>
      {
        tabs && tabs.map((item, index) => {
          return <div className={`tab-item ${selectedIndex === index ? 'active' : ''}`} key={index} onClick={e => handleClick(index)}>{item}</div>
        })
      }
    </SearchTabsWrapper>
  )
})

export default index