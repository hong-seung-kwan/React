import { useState } from 'react';
import './App.css';
// 연습문제 1

// state는 컴포넌트 함수 밖에서 생성할 수 없음
// state는 컴포넌트의 생명주기를 관리하는 훅이기 때문에

// 화면 구성
function App() {

  // 일반 변수가 아닌 state로 선언
  let [count, setCount] = useState(0);

  
  function up(){
    setCount(count + 1)
  }

  return (
    <div className="App">
      
      <input type="button" value='-' onClick={ ()=>{
        // count 는 read only
        // count state를 변경할 때는 set함수 사용해야함        
        setCount(count - 1)
        
      } }></input>
      <input type="button" value='0' onClick={ ()=>{
        setCount(0)
      } }></input>
      <input type="button" value='+' onClick={ up }></input>

      <span>{count}</span>

    </div>
  );
}

export default App;
