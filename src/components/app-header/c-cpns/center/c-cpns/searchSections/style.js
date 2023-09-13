import styled from "styled-components";

export const SearchSectionWrapper = styled.div`
width: 600px;
display: flex;
border: 1px solid #eee;
border-radius: 25px;
padding: 10px 10px;
font-size: 12px;
.section-item {
  flex: 1;
  text-align: center;
  border-right: 1px solid #eee;
  &:last-child {
    border-right: none;
  }
  .title {
    font-weight: 600;
  }
  .desc {
    color: #ccc;
  }

}
`