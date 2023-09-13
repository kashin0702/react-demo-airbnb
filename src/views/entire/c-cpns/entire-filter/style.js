import styled from "styled-components";

export const EntireFilterWrapper = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  .filter-item {
    padding: 5px 18px;
    border: 1px solid #eee;
    border-radius: 6px;
    margin: 0 8px;
    cursor: pointer;
  }
  .active {
    color: #fff;
    background-color: #1F7F8A;
  }
`