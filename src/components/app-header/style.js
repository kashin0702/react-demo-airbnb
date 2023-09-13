// styled-components样式文件 css in js
import styled from "styled-components"

export const HeaderWrapper = styled.div`
  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
  }
  .content {
    background-color: #fff;
    position: relative;
    z-index: 99;
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #eee;
  }
  .search-bar {
    background-color: #fff;
    position: relative;
    z-index: 19;
  }
  .cover {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`
// searchBar单独样式
export const SearchBarWrapper = styled.div`
.search-bar {
  height: ${props => props.isSearch ? '80px' : '0px'}; // 根据状态动态设置高度
  transition: height ease 300ms;
}
`