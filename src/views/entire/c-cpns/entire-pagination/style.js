import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .pagination-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 自定义mui-pagination按钮样式 */
    .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root {
      &.Mui-selected {
        background-color: black;
        color: #fff;
      }
    }
    .info {
      margin-top: 20px;
    }
  }
`