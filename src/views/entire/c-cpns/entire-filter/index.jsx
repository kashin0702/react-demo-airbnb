import React, { memo, useState } from 'react'
import { EntireFilterWrapper } from './style'

const index = memo((props) => {
  const {list} = props
  // 维护已选择的过滤条件, 模拟搜索请求的入参
  const [activeItems, setActiveItems] = useState([])
  const handleClick = (item, index) => {
    let newItems = [...activeItems]
    if (newItems.includes(item)) { // 已经选择，数组里删除该选项
      let index = newItems.findIndex((newItem) => newItem === item) // 获取要删除的索引
      newItems.splice(index, 1)
    } else {
      newItems.push(item)
    }
    setActiveItems(newItems) // memo内要用新对象进行setState, 否则页面不会更新
  }
  return (
    <EntireFilterWrapper>
      {
        list && list.map((item, index) => {
          return (
            <div className={`filter-item ${activeItems.includes(item) ? 'active' : ''}`}  key={item} onClick={() => handleClick(item, index)}>{item}</div>
          )
        })
      }
    </EntireFilterWrapper>
  )
})

export default index