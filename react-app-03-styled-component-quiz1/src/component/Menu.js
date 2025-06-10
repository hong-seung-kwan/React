import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

// 세개의 링크를 감싸는 div 태그 생성
// styled component 방식으로 div태그 생성
const MenuDiv = styled.div`
  background-color: gainsboro;
  padding: 10px;
  /* div 아래 자식들을 1:1:1 비율로 배치 */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
`

const Menu = () => {
  return (
    <MenuDiv>
      {/* NavLink: Link + 부가기능 */}
      {/* 링크를 클릭하면 active 클래스 추가됨 */}
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </MenuDiv>
  )
}

export default Menu