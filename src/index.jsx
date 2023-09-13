import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom'
import { Suspense } from 'react'; // !!懒加载组件需要使用suspense包裹!!
import { Provider } from 'react-redux';
import store from './store'
import App from '@/App'; // 利用craco配置的别名路径
import 'normalize.css' // 样式重置
import './assets/css/index.less' // 自己的样式重置文件
// styled提供的主题插件, 用法和redux一样
import {ThemeProvider} from 'styled-components'
import { theme } from './assets/theme'
// antd样式
import 'antd/dist/reset.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      {/* 传入主题theme对象 */}
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Suspense fallback={<h2>组件加载中...</h2>}>
            <App />
          </Suspense>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  // {/* </React.StrictMode> */}
)
