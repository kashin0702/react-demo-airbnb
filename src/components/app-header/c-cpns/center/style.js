import styled from "styled-components"

export const CenterWrapper = styled.div`
position: relative;
display: flex;
justify-content: center;
height: 40px;
/* align-items: center; */
.search-origin {
  position: absolute;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 5px 10px;
  width: 400px;
  border: 1px solid #eee;
  border-radius: 22px;
  box-shadow: 0 4px 4px #eee;
  .icon {
    padding: 10px;
    background-color: var(--primary-color);
    border-radius: 50%;
  }
}
.search-detail {
  position: relative;
  transform-origin: 50% 0;
  .section {
    position: absolute;
    left: 50%;
    top: 55px;
    transform: translateX(-50%);
  }
}

/* 切换时动画， 两个组件同时进行动画 */
/* tab初始 */
.origin-enter {
  transform: scale(2.85, 1.37) translateY(55px);
  opacity: 0;
}
/* tab进入 */
.origin-enter-active {
  transition: all ease 300ms;
  transform: scale(1.0) translateY(0);
  opacity: 1;
}
/* tab离开 */
.origin-exit {
  opacity: 0;
}

/* 详情初始 */
.detail-enter {
  transform: scale(0.35, 0.72) translateY(-55px); // y轴 负值向上，正值向下
  opacity: 0;
}
/* 详情进入 */
.detail-enter-active {
  transition: all ease 300ms;
  transform: scale(1.0) translateY(0);
  opacity: 1;
}
/* 详情离开初始 */
.detail-exit {
  transform: scale(1.0) translateY(0);
  opacity: 1;
}
/* 详情离开 */
.detail-exit-active {
  transition: all ease 300ms;
  transform: scale(0.35, 0.72) translateY(-55px);
  opacity: 0;
}
`