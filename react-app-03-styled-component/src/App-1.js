
// 1. styled component 없이 버튼 만들기

// 매개변수로 props 받기
function ReactButton(props){
  
  // 버튼 꾸미기
  // 글자는 화이트, 배경은 퍼플

  // 실제 css에서 속성명은 background-color
  // 자바스크립트에서 css 코드를 작성할 때는 속성명이 약간 다름
  const style = {
    color: 'white',
    backgroundColor: 'purple'
  }
  return <button style={style}>{props.children}</button>
}

function App() {
  return (
    <div className="App">
      <ReactButton>React</ReactButton>
    </div>
  );
}

export default App;
