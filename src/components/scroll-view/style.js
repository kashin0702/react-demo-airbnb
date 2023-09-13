import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
position: relative; // 父元素设置定位属性后，子元素的offetLeft属性才生效，否则offsetLeft会定位到body上
.btn {
  .left {
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    z-index: 999;
    border: 2px solid #fff;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.14);
  }
  .right {
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    z-index: 999;
    border: 2px solid #fff;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.14);
  }
}
.content-scroll {
  overflow: hidden; // ！要设置在父元素上！ 子元素才能正常隐藏
  .content {
    display: flex;
    flex-wrap: nowrap;
    margin: 0 -5px;
    transition: transform 300ms ease; // 滚动时过渡动画
    .tab-item {
      text-align: center;
      flex-basis: 220px;
      flex-shrink: 0; // 不自动应缩小
      border: 0.5px solid #eee;
      padding: 10px 25px;
      margin: 0 5px;
      &:hover {
        background-color: #008489;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}

`