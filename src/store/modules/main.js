// 控制一些全局参数的store
import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headerConfig: {
      isFixed: true // 整个组件是否fixed布局
    }
  },
  reducers: {
    changeHeaderConfigAction (state, {payload}) {
      state.headerConfig = payload
    }
  }
})

export const {changeHeaderConfigAction} = mainSlice.actions
export default mainSlice.reducer