import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'
import ArrowLeft from '../../assets/svg/ArrowLeft'
import ArrowRight from '../../assets/svg/ArrowRight'

// 滚动条组件，接收需要滚动的数据
const ScrollView = memo((props) => {
  // 利用插槽传入数据，默认是一个children数组
  const {children} = props
  const contentRef = useRef() // 获取滚动元素的DOM
  const [showRight, setShowRight] = useState(false) // 初始时按钮是否可见
  const [showLeft, setShowLeft] = useState(false)
  const [childIndex, setChildIndex] = useState(0) // 保存子元素的索引 设置滚动距离用

  const distanceRef = useRef() // useRef可以保证变量在整个生命周期中不变，属于性能优化， 也可使用useState但调用set时会渲染组件，因为这个值不会变所以没必要

  // 滚动核心思想=> 获取每个子元素的offsetLeft值(子元素距离父元素左测的距离)，根据该值进行滚动

  // 右按钮
  const scrollRight = () => {
    // useState的set方法是异步的，不能在设置后立即使用，还是原来的值，涉及闭包陷阱概念
    const newIndex = childIndex + 1
    const newOffsetLeft = contentRef.current.children[newIndex].offsetLeft // 获取DOM子元素的offsetLeft值
    contentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`
    setChildIndex(newIndex) // 在最后调用set方法保存值，下次调用就会生效了
    setShowRight(distanceRef.current > newOffsetLeft) // 当已滚动offset大于可滚动距离时，右滚动按钮消失
    setShowLeft(newOffsetLeft > 0)
    console.log('contentRef',contentRef)
  }
  // 左按钮
  const scrollLeft = () => {
    const newIndex = childIndex - 1 // 获取前一个元素的offsetLeft
    const newOffsetLeft = newIndex > 0 ? contentRef.current.children[newIndex].offsetLeft : 0 // 第一个元素有margin, offset为5，直接设置为0
    contentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`
    setChildIndex(newIndex)
    setShowRight(distanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }
  useEffect(() => {
    const scrolldistance = contentRef.current.scrollWidth // 实际宽度
    const domWidth = contentRef.current.clientWidth // 页面可见宽度
    setShowRight(scrolldistance > domWidth) // 初始化时滚动距离大于实际宽度时，显示右边按钮
    distanceRef.current = scrolldistance - domWidth // 保存可滚动距离 注意ref的属性保存在current上
  }, [children]) // 依赖插槽数据进行回调更新

  return (
    <ScrollViewWrapper>
      <div className="btn">
        {showLeft && <div className='left' onClick={scrollLeft}><ArrowLeft></ArrowLeft></div>} 
        {showRight && <div className='right' onClick={scrollRight}><ArrowRight></ArrowRight></div>}
      </div>
      <div className="content-scroll">
        <div className="content" ref={contentRef}>
          {children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView