// redux-toolkit写法
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscount, getLongForData } from '../../service';
// 一个异步请求action，里面可以发送多个网络请求， fetchData是调试工具内显示的名字 回调的第二个参数返回一个store对象，解构得到disptach和getState
export const fetchHomeDataAction = createAsyncThunk('fetchData', (payload, {dispatch, getState}) => {
  // 发送多个网络请求，因为没有先后的要求，所以不使用await
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceAction(res)) // 调用的是底部导出的action
  })
  getHomeHighScoreData().then(res => {
    dispatch(getHighScoreAction(res))
  })
  getHomeDiscount().then(res => {
    dispatch(getDiscountAction(res))
  })
  getLongForData().then(res => {
    dispatch(getLongForAction(res))
  })
  // return res // 返回获取到的数据，在extraReducers中进行保存
})
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    goodPriceInfo: {}, // 首页-优惠房源
    highScoreInfo: {}, // 首页-高分房源
    tabsInfo: {}, // 首页-tab数据
    longForData: {} // 首页-向往城市
  },
  reducers: {
    // 修改state的action都放在reducers中，底部统一导出
    changeGoodPriceAction (state, {payload}) {
      state.goodPriceInfo = payload
    },
    getHighScoreAction (state, {payload}) {
      state.highScoreInfo = payload
    },
    getDiscountAction (state, {payload}) {
      state.tabsInfo = payload
    },
    getLongForAction (state, {payload}) {
      state.longForData = payload
    }
  },
  extraReducers: {
    // 请求成功后的回调，在这里保存数据 回调传入的第二个参数解构属性payload就是返回的数据对象
    // 因为请求了多个接口数据，这里不使用extraReducers, 直接在fetchHomeDataAction的then中使用disptach保存数据也可以
    // [fetchHomeDataAction.fulfilled] (state, {payload}) {
    //   state.goodPriceInfo = payload // 保存获取到的数据
    // }
  }
})

export const {changeGoodPriceAction, getHighScoreAction, getDiscountAction, getLongForAction} = homeSlice.actions // 导出的action， disptach调用的是这个action
export default homeSlice.reducer