import styled from "styled-components"
// webpack使用本地图片需要采用Import方式，否则路径不匹配找不到
import cover from '@/assets/img/cover_01.jpeg'

export const HomeBannerWrapper = styled.div`
height: 529px;
background: url(${cover}) left top no-repeat;
background-size: cover;
`