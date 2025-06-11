import { useReducer, useState } from "react"

// state를 관리하는 로직이 복잡할때 reducer를 사용

function App() {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState(null)

  const [input, setInput] = useState('')
  // const [result, setResult] = useState(null)


  // result라는 state를 usestate 대신 useReducer로 관리

  // 1. 리듀서 함수를 만든다
  // 리듀서함수: state를 한곳에서 관리하는 함수
  // 매개변수: 이전 state값, 액션
  // 반환값: 새로운 state값
  function resultReducer(oldState, action){
    // 임시값
    let temp;

    // 액션에 따라 결과값 구하기
    switch(action.type){
      case '+':
        temp = action.num1 + action.num2
        break;
      case '-':
        temp = action.num1 - action.num2
        break;
      case '*':
        temp = action.num1 * action.num2
        break;
      case '/':
        temp = action.num1 / action.num2
        break;
      case '0':
        temp = null
        break
      default:
        temp = null
    }
    // 계산이 끝났으면 구한 값을 리턴
    // 리턴되는 값이 새로운 state가 됨
    return temp;
  }
  // 2. state와 dispatch를 만든다
  // 인자: 리듀서함수, result state 초기값
  // 반환값: 현재 state값, dispatth 함수
  const [result, resultDispatch] = useReducer(resultReducer, null)


  function changeNumber(num){
    setInput(input + num)
    if(operator === null){
      setNum1(num)
    }else{
      setNum2(num)
    }
  }



  function clear(){
    setInput('')
    setNum1(0)
    setNum2(0)
    setOperator(null)
    // set함수 대신 dispatch를 사용하여 result를 변경
    // setResult(null)
    resultDispatch({ type:'0' })
  }

  return (
    <div className="App">
      <h2>계산기</h2>
      <div>
        <div>식:{input}</div>
        <div>결과:{result}</div>
      </div>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => {
          return <button key={num} onClick={()=>{changeNumber(num)}}>{num}</button>
        })}
      </div>
      <div>
        {['+', '-', '*', '/'].map((op) => {
          return <button key={op} onClick={ ()=>{
            setInput(input + op)
            setOperator(op)
          } }>{op}</button>
        })}
      </div>
      <div>
        {/* 버튼을 클릭하면 결과값이 계산됨 */}
        <button onClick={ () => {
          // 이전에는 set함수를 사용해서 state를 바꿧지만
          // 이제 dispatch함수를 통해서 state를 바꿔야함
          // 인자: 명령과 계산에 필요한 값
          // 리듀서함수 내부에서 사용하는 state값은 안에서 직접 사용x
          // 밖에서 전달
          resultDispatch( {type:operator, num1:num1, num2:num2} )
        } }>=</button>
        <button onClick={clear}>C</button>
      </div>
    </div>
  );
}

export default App;
