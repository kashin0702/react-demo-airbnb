import styled from "styled-components"

export const HomeWrapper = styled.div`
margin-top: 60px; // 防止覆盖，顶部fixed组件的高度60px
.module {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  & > div {
    margin-top: 40px;
  }
}
`