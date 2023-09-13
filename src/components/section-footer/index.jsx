import React, { memo } from 'react'
import { FooterSectionWrapper } from './style'
import ArrowMore from '../../assets/svg/ArrowMore'
import { useNavigate } from 'react-router-dom'

const FooterSection = memo((props) => {
  const navigate = useNavigate() // 路由跳转hooks，返回一个跳转方法
  const {name} = props
  let title = ''
  if (name) {
    title = `探索更多${name}房源`
  } else {
    title = '查看全部'
  }
  return (
    <FooterSectionWrapper>
      <div className="info">
        {/* 跳转到“全部房源”页面 */}
        <span onClick={() => navigate('/entire')}>{title}</span>
        <ArrowMore />
      </div>
    </FooterSectionWrapper>
  )
})

export default FooterSection