import { createContext, useContext } from 'react';
import './App.css';

// 공통 스타일
// 공통 스타일을 사용하면 모든 컴포넌트를 한번에 변경할 수 있음
const themeDefault = { border: '10px solid red' }

// context라는 저장소 생성
// 여러 컴포넌트에서 값을 공유하기 위해서 사용함
// context는 state값을 저장할 수 있음
// 그런데 state는 컴포넌트 밖에서 저장 X
const themeContext = createContext(themeDefault)

function Sub1() {
  // context 저장소에서 공통스타일 꺼내기
  // context를 사용해서 특정 컴포넌트 스타일 변경
  // sub2와 sub3의 스타일만 green으로 변경
  const theme = useContext(themeContext)

  // div 태그를 Provider컴포넌트로 감싸기
  return (
    <themeContext.Provider value={ { border: '10px solid green' } }>
    <div style={theme}>
      <h1>Sub1</h1>
      <Sub2></Sub2>
    </div>
    </themeContext.Provider>
  )
}

function Sub2() {

  // sub2는 가장 가까운 provider로부터 스타일을 전달받음
  const theme = useContext(themeContext)
  console.log(theme)

  return <div style={theme}>
    <h1>Sub2</h1>
    <Sub3></Sub3>
  </div>
}

function Sub3() {

  // sub3는 가장 가까운 provider로부터 스타일을 전달받음
  const theme = useContext(themeContext)
  console.log('sub3:' , theme)

  return <div style={theme}>
    <h1>Sub3</h1>
  </div>
}

function App() {

  // context 저장소에서 스타일값 꺼내기
  // 인자: context
  const theme = useContext(themeContext)

  return (
    // 공통스타일을 app 컴포넌트에 적용
    <div className="App" style={theme}>
      Hello World!
      <Sub1></Sub1>
    </div>
  );
}

export default App;
