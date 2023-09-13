import React, { memo } from 'react'
import {SearchSectionWrapper} from './style'

const index = memo((props) => {
  const {data} = props
  return (
    <SearchSectionWrapper>
      {
        data && data.map((item, index) => {
          return (
            <div className="section-item" key={index}>
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
          )
        })
      }
    </SearchSectionWrapper>
  )
})

export default index