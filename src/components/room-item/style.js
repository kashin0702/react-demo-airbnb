import styled from "styled-components"
export const RoomWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  /* 动态设置宽度，flex布局下动态设置每行个数 */
  width: ${props => props.itemWidth};
  padding: 8px;
  /* margin: 8px; // border-box只对padding,border生效，对margin不生效！ */
  .cover {
    img {
      width: 100%;
      height: 210px;
    }
  }
  .slider {
    cursor: pointer;
    position: relative;
    color: #fff;
    .control {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
    }
    &:hover {
      .control {
        z-index: 999;
        .left, .right {
          visibility: visible;
        }
      }
    }
    .left, .right {
      visibility: hidden;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .dot {
      /* overflow: hidden; */
      z-index: 999;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 5px;
      width: 35%;
      margin: 0 auto; // 绝对定位元素，left right为0占满一行，且设置宽度后，可以使用margin居中
      .dot-container {
        flex-shrink: 0; // 不缩放
        width: 20%; // 显示5个点
        display: flex;
        justify-content: center;
        align-items: center;
        .dot-item {
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #fff;
          border-radius: 50%;
          &.active {
            width: 12px;
            height: 12px;
            background-color: red;
          }
        }
      }
    }
    
  }
  .title {
    font-size: 14px;
    padding: 5px 0;
    color: ${props => props.color}
  }
  .desc {
    font-weight: 600;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 这里是超出几行省略 */
  }
  .price {
    font-size: 14px;
  }
`