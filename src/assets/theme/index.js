export const theme = {
  color: {
    primaryColor: '#ff385c',
    secondaryColor: '#00848A'
  },
  mixin: {
    // 多处会用到box-shadow, 抽取到公共属性内使用
    boxShadow: `transition: box-shadow 0.5s ease;
    &:hover {
      box-shadow: 0 4px 4px #eee;
    }`
  }
}