import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

// 轮播图dot组件
const Indicator = memo((props) => {
  const {children, selectIndex = 0} = props
  const contentRef = useRef()

  useEffect(() => {
    const currentEl = contentRef.current.children[selectIndex]
    const currentElWidth = currentEl.clientWidth
    // dot滚动到中间的距离计算 => 可滚动距离= offsetLeft + 元素本身width/2 - 父容器width/2
    const clientWidth = contentRef.current.clientWidth
    const scrollDistance = currentEl.offsetLeft + currentElWidth / 2 - clientWidth / 2
    // console.log('scrollDistance==>', scrollDistance)
    // console.log('selectIndex==>', selectIndex)
    // 处理无需滚动的情况，例如前几个元素和最后几个元素不需要滚动到中间位置
    const totalWidth = contentRef.current.scrollWidth
    if (scrollDistance <= 0) { // 左侧边界情况 当左侧滚动超出时，设置滚动距离为0，即初始位置
      contentRef.current.style.transform = 'translateX(0px)'
    } else if (scrollDistance > (totalWidth - clientWidth)) { // 右侧边界情况， 右侧滚动超出时，设置滚动距离为最大滚动距离
      contentRef.current.style.transform = `translateX(${-(totalWidth - clientWidth)}px)` // 总宽度-父容器宽度=最大滚动距离
    } else {
      contentRef.current.style.transform = `translateX(${-scrollDistance}px)`
    }
  }, [selectIndex])
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {children}
      </div>
    </IndicatorWrapper>
  )
})

export default Indicator