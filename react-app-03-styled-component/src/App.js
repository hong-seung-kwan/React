import React from "react";
import styled from "styled-components";

// 2. styled component를 사용해서 버튼 만들기
// styled component : css 코드를 그대로 작성할 수 있도록 도와주는 기능
// styled component로 <button> 태그 생성
// styled.tag이름 + ``(백틱)
const SimpleButton = styled.button`
  color: white;
  background-color: purple;
`;

// styled component로 다른 버튼 생성
// 위에 있는 SimpleButton 버튼 상속받기
// 부모로 부터 css를 물려받고, 자식에서 새로운 css를 추가함
// 부모로부터 class를 물려받아서 css가 추가된 것
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`

// 일반 버튼 생성
const ReactButton = (props) => {
  // console.log(props)
  // 자식인 ReactLargeButton 버튼이 생성이 욀때
  // props로 버튼의 이름과 class이름이 전달됨
  // <button> 태그에 class 이름을 적용해야함
  return <button className={props.className}>{props.children}</button>
}

// styled component로 생성한 태그에는 class 이름이 있어야함
// 하지만 부모인 ReactButton은 일반 버튼이여서 class 이름이 없음
// 그래서 css 적용이 안됨
// styled component에서 일반 태그를 상속받을때는
// class를 별도로 추가해야함
const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`

// styled component 방식으로 버튼 생성
// 버튼의 속성에 따라 색 변경하기
// 함수가 반환하는 값이 color가 됨
// 버튼이 primary라는 속성이 있으면 color를 화이트로 변경
// 없으면 black으로 변경
const PrimaryButton = styled.button`
  color: ${(props) => {
    if (props.primary) {
      return 'white'
    } else {
      return 'black';
    }
  }}
`

function App() {
  return (
    <div className="App">
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>LargeReact</ReactLargeButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
    </div>
  );
}

export default App;
