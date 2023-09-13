import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home';
import entireReducer from './modules/entire'
import detailReducer from './modules/detail'
import mainReducer from './modules/main'

// 使用toolkit和传统store方式创建reducer
const store = configureStore({
  reducer: {
    home: homeReducer, // createSlice方式
    entire: entireReducer, // 传统方式react-redux
    detail: detailReducer,
    main: mainReducer
  }
}) 

export default store