import styled from "styled-components";

export const DetailWrapper = styled.div`
.pictures {
  box-sizing: border-box;
  height: 600px;
  display: flex;
  overflow: hidden;
  position: relative;
  &:hover {
    .cover {
      opacity: 1 !important; // hover时显示所有蒙板
    }
  }
  .left,.right {
    width: 50%;
    height: 100%;
  }
  .left-item {
    width: 100%;
    height: 100%;
    border: .5px solid black;
    position: relative;
    overflow: hidden;
    &:hover {
      img {
        transform: scale(1.2);  // 对图片缩放，父容器overflow:hidden才会有效
      }
      .cover {
        opacity: 0 !important; // 排他思想：hover的那个容器单独不加蒙板
      }
    }
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.2);
      z-index: 99;
      opacity: 0; // 正常状态时蒙板不可见
    }
    img {
      width: 100%;
      height: 100%;
      transition: transform ease 200ms;
    }
  }
  .right {
    display: flex;
    flex-wrap: wrap;
    .right-item {
      border: .5px solid black;
      width: 50%;
      height: 50%;
      position: relative;
      transition: transform ease 200ms;
      overflow: hidden;
      &:hover {
        img {
          transform: scale(1.2);
        }
        .cover {
          opacity: 0 !important;
        }
      }
      .cover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.2);
        z-index: 99;
        opacity: 0;
      }
      img {
        width: 100%;
        height: 100%;
        transition: transform ease 200ms;
      }
    }
  }
  .show-btn {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: #fff;
    padding: 5px 15px;
    border-radius: 4px;
    cursor: pointer;
    z-index: 100;
  }
}
`