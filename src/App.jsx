import React, { memo } from 'react'
import {useRoutes} from 'react-router-dom'
import AppHeader from './components/app-header'
import routes from './router'
import { AppWrapper } from './style'
const App = memo(() => {
  return (
    <AppWrapper>
      <AppHeader/>
      <div className='page'>
        {/* 路由页面 */}
        {useRoutes(routes)}
      </div>
      <div className="footer">
        
      </div>
    </AppWrapper>
  )
})

export default App
