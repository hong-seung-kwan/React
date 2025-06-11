import { useReducer, useState } from 'react';
import './App.css';

// useState -> useReducer로 변경
// reducer: state를 더 체계적으로 관리하는 도구

function App() {

  // 사용자가 입력한 숫자를 저장할 변수
  // 리듀서는 state를 관리하는 함수이기 때문에 일반변수가 바뀌어도 영향X
  let [num, setNum] = useState(0);

  // 리듀서 함수 만들기
  // 인자: 이전 state값, 액션(명령)
  // state를 한곳에서 관리
  function countReducer(oldState, action){
    console.log(action.type)
    console.log(action.num)

    if(action.type === 'UP'){
      return oldState + action.num
    }else if(action.type === 'DOWN'){
      return oldState - action.num
    }else if(action.type === 'RESET'){
      return 0
    }
  }

  // useState 대신 useReducer 함수 사용
  // 인자: 리듀서함수, state초기값
  // 반환값: 현재 state, dispatch라는 함수
  const [count, countDispatch]  = useReducer(countReducer, 0)

  // 다시 이벤트 함수 정의
  // 기존에는 setCount를 사용했지만 이제 countDispatch 사용
  // dispatch 함수로 명령 전달

  // setCount는 state를 직접 변경
  // dispatch는 리듀서함수를 통해서 state를 변경

  // dispatch 함수를 통해서 명령과 값을 전달
  function down(){ 
    // countDispatch('DOWN')
    countDispatch( { type: 'DOWN', num: num } )
  }
  function reset(){ 
    countDispatch( {type:'RESET', num: num} )
  }
  function up(){ 
    countDispatch( {type:'UP', num: num} )
  }


  return (
    <div className="App">
      <button onClick={down}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={up}>+</button>
      {/* 사용자가 입력한 값을 다시 value로 넣어야함 */}
      <input type='text' value={num} onChange={ (event) => {
        setNum(Number(event.target.value))
      } }></input>
      <span>{count}</span>
    </div>
  );
}

export default App;
