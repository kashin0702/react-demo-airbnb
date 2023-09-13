import React, { memo } from 'react'
import { LeftWrapper } from './style'
import Logo from '../../../../assets/svg/logo'
import { useNavigate } from 'react-router-dom'

const headerLeft = memo(() => {
  const navigate = useNavigate()
  return (
    <LeftWrapper>
      {/* 引入封装成组件的svg图标 */}
      <div style={{cursor: 'pointer'}} onClick={() => navigate('/home')}>
        <Logo></Logo>
      </div>
    </LeftWrapper>
  )
})

export default headerLeft