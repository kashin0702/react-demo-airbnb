import styled from "styled-components";

export const SearchTabsWrapper = styled.div`
display: flex;
justify-content: center;
.tab-item {
  margin: 5px 10px;
  padding-bottom: 10px;
  cursor: pointer;
  &.active {
    border-bottom: 2px solid black;
  }
}
`