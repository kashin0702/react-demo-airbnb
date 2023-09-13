import * as actionTypes from './constants.js'
import {getEntireListData} from '@/service'

export const changeEntireListAction = (roomList) => {
  return {
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
  }
}

export const changeTotalCountAction = (totalCount) => {
  return {
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
  }
}

export const changeCurrentPageAction = (currentPage) => {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
  }
}
// 网络请求 放在redux的action中进行请求
export const fetchRoomListDataAction = (pageParams) => {
  const {offset, size} = pageParams
  // 回调函数接收disptach和getState
  return function (dispatch) {
    getEntireListData(offset, size).then(res => {
      dispatch(changeEntireListAction(res.list)) // 保存数据到redux
      dispatch(changeTotalCountAction(res.totalCount))
    })
  }
}