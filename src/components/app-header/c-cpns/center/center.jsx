import React, { memo, useState } from 'react'
import { CenterWrapper } from './style'
import IconSearch from '../../../../assets/svg/IconSearch'
import SearchTabs from './c-cpns/searchTabs'
import SearchSections from './c-cpns/searchSections'
import searchTitles from '@/data/searchTitleData.json'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {
  const {isSearch, onSearch} = props
  const titles = searchTitles.map(item => item.title)
  const [selectedIndex, setSelectedIndex] = useState(0)
  function tabClick (index) {
    setSelectedIndex(index) // 给组件传回调函数，接收index, 直接保存点击的index，激活对应样式
  }
  function handleSearch () {
    if (!isSearch) onSearch(true)
  }
  return (
    <CenterWrapper onClick={e => handleSearch()}>
      {/* 同时进行两个动画，用CSSTransition分别包裹 */}
      <CSSTransition in={!isSearch} unmountOnExit={true} classNames="origin" timeout={300}>
        <div className="search-origin">
          <div>探索房源和体验</div>
          <div className='icon'>
            <IconSearch/>
          </div>
        </div>
      </CSSTransition>
      
      <CSSTransition in={isSearch} unmountOnExit={true} classNames="detail" timeout={300}>
        <div className="search-detail">
          <SearchTabs tabs={titles} selectedIndex={selectedIndex} tabClick={tabClick}/>
          <div className="section">
            <SearchSections data={searchTitles[selectedIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter