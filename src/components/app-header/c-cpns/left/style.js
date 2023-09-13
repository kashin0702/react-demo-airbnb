import styled from "styled-components"

export const LeftWrapper = styled.div`
  margin-left: 25px;
  flex: 1;
  /* 引入主题色方法1 引入root定义的变量 */
  /* color: red; */
  /* 引入主题色方法2  回调函数 theme就是从ThemeProvider中传入的theme*/
  color: ${props => props.theme.color.secondaryColor}
`
