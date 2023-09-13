import styled from "styled-components"

export const RightWrapper = styled.div`
  font-size: 14px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 25px;
  .btns {
    display: flex;
    align-items: center;
    .item {
      padding-left: 20px;
      cursor: pointer;
    }
  }
  .profile {
    position: relative;
    cursor: pointer;
    border: 1px solid #eee;
    padding: 5px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    justify-content: space-between;
    width: 60px;
    /* transition: box-shadow 0.5s ease;
    &:hover {
      box-shadow: 0 2px 2px #eee;
    } */

    /* 使用公共的mixin实现box-shadow */
    ${props => props.theme.mixin.boxShadow}
    
    /* 点击显示登录框 */
    .panel {
      border-radius: 5px;
      background-color: #fff;
      position: absolute;
      width: 240px;
      top: 50px;
      right: 0;
      box-shadow: 0 2px 1px #eee;
      .item {
        padding: 10px;
        &:hover {
          background-color: #eee;
        }
      }
    }
  }
`