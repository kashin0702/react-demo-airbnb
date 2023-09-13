import {Navigate} from 'react-router-dom'
import React from 'react'
// 组件都使用懒加载
const Home = React.lazy(() => import('../views/home/index'))
const Detail = React.lazy(() => import('../views/detail/index'))
const Entire = React.lazy(() => import('../views/entire/index'))
const Demo = React.lazy(() => import('../views/demo/index'))

const routes = [
  // 首次登陆定向到Home
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/detail',
    element: <Detail/>
  },
  {
    path: '/entire',
    element: <Entire/>
  },
  {
    path: '/demo',
    element: <Demo/>
  }
]

export default routes