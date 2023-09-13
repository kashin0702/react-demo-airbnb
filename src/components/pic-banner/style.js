import styled from "styled-components"

export const PicBannerWrapper = styled.div`
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: #333;
z-index: 999;
display: flex;
flex-direction: column; // 垂直布局 上部，底部高度固定，中间自适应
.top {
  width: 100%;
  height: 70px;
  position: relative;
  > * {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
  }
}
.main {
  position: relative;
  width: 100%;
  flex: 1; // 中间区域高度自适应
  .control {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    color: #fff;
    .left,.right {
      z-index: 99;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      margin: 0 auto;
      user-select: none; // 防止图片被选中
    }
    .switch-enter {
      transform: translateX(${props => props.action === 'next' ? '100%' : '-100%'}); // 根据点击按钮判断动画左滑还是右滑
      opacity: 0;
    }
    .switch-enter-active {
      transform: translateX(0);
      opacity: 1;
      transition: all ease 500ms;
    }
    .switch-exit {
      opacity: 1;
    }
    .switch-exit-active {
      opacity: 0;
      transition: all ease 500ms;
    }
  }
}
.preview {
  margin-top: 5px;
  width: 100%;
  height: 100px;
  color: #fff;
  display: flex;
  justify-content: center;
  .list {
    position: absolute; // 重要：对整个容器绝对定位，当隐藏图片时，上方文字才会一起往下移动
    bottom: 10px; // 重要：靠底部定位
    width: 1000px;
    .desc {
      display: flex;
      justify-content: space-between;
      .toggle {
        cursor: pointer;
      }
    }
    .indicator {
      overflow: hidden;
      transition: height ease 300ms; // 高度动画设置在父容器上 上下滑动正常
      .indicator-item {
        margin-right: 20px;
        cursor: pointer;
        &.active {
          img {
            opacity: 1;
          }
        }
        img {
          opacity: 0.5;
          width: 120px;
          height: 67px; // 图片设置固定高度和父容器一样高
          object-fit: cover; // 图片的显示方式，宽高都有值时才有效
        }
      }
    }
  }
}
`