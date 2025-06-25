// 로그인, 회원가입, 게시물 관리 화면에서 사용할 공통 스타일

import styled from "styled-components";

// 카드
// styled component로 div 태그 생성
export const CustomCard = styled.div`
  /* 크기 */
  width: 1150px;
  height: 100%;
  background-color: white;
  border-radius: 16px;
  border: none;
  padding: 24px;
  margin: 50px;
  /* 그림자 효과 */
  /* x축 y축 흐림 색상 */
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
`

// 실제 컨텐츠를 담을 컨테이너
export const CustomContainer = styled.div`
/* 크기 */
width: 100%;
height: 100%;
// 자식 아이템 배치
display: flex;
flex-direction: column;
gap:10px;
`

