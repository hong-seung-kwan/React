import { useState } from 'react';
import './App.css';
// 연습문제 2

function App() {

  let [count, setCount] = useState(0)

  function length(event){
    setCount(event.target.value.length)
  }

  return (
    <div className="App">
      {/* 사용자가 텍스트를 입력하면 이벤트 발생 */}
      <input type='text' onChange={length}></input>
      <p>글자 수:{ count }</p>    
    </div>
  );
}

// export: 다른 파일에서 사용할 수 있도록 내보내기
export default App;

