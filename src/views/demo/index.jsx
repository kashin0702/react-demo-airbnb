import React, { memo, useState } from 'react'
import Indicator from '../../components/indicator'
import { DemoWrapper } from './style'

const index = memo(() => {
  const [index, setIndex] = useState(0)
  const arr = ['111', '222', '333', '444', '555', '666', '777', '888', '999']

  const handleAction = (action) => {
    let newIndex = null
    if (action === 'next') {
      newIndex = index + 1
      if (newIndex > arr.length - 1) newIndex = 0
      setIndex(newIndex)
    }
    if (action === 'prev') {
      newIndex = index - 1
      if (newIndex < 0) newIndex = arr.length - 1
      setIndex(newIndex)
    }
  }
  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={() => handleAction('prev')}>上一个</button>
        <button onClick={() => handleAction('next')}>下一个</button>
      </div>
      <div className="list">
        {/* 传入索引值，计算滚动距离 */}
        <Indicator selectIndex={index}>
          {
            arr.map((item, index)=> {
              return <button key={index}>{item}</button>
            })
          }
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default index