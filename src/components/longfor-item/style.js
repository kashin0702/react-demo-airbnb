import styled from "styled-components";

export const LongForItemWrapper = styled.div`
  margin: 0 5px;
  flex-shrink: 0;
  width: 20%; // 展示5个item
  position: relative;
  .cover {
    position: absolute;
    z-index: -10;
    width: 100%;
    height: 300px;
    overflow: hidden;
    .mb {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.5) 5%, transparent);
    }
    img {
      width: 100%;
    }
  }
  .city {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 300px; // 有高度后flex-end生效
    color: #fff;
    padding-bottom: 20px;
    .name {
      font-weight: 600;
    }
  }
`