// 홈화면을 반환하는 컴포넌트

import React from 'react'
import { CustomCard, CustomContainer } from '../components/styles'

// 공통 스타일 추가
const Home = () => {
  return (
    // 카드형태로 꾸미는 용도
    <CustomCard>
      {/* Container: 안에 들어갈 자식들을 배치할 용도 */}
      <CustomContainer>
        <h3>Home</h3>
      </CustomContainer>
    </CustomCard>
  )
}

export default Home