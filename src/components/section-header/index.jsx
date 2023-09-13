import { HeaderWrapper } from "./style";
import React, { memo } from 'react'

const header = memo((props) => {
  const {title, subtitle = '默认副标题'} = props
  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </HeaderWrapper>
  )
})

export default header