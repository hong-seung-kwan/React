import { useState } from "react"

function App() {

  // 식에 포함되는 것: 숫자2개, 연산자

  // 숫자, 연산자, 식을 state로 생성
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState(null) // 연산자
  // 식에 숫자와 연산자를 연결해야하기 때문에 초기값은 빈문자
  const [input, setInput] = useState('') // 식
  const [result, setResult] = useState(null) // 결과

  // 식은 숫자 또는 연산자를 클릭했을때

  // 매개변수: 사용자가 선택한 숫자
  function changeNumber(num){

    // 식도 함께 업데이트
    setInput(input + num)

    // 연산자 선택했으면 num2 아니면 num1
    if(operator === null){
      setNum1(num)
    }else{
      setNum2(num)
    }
  }

  // 결과 함수
  function calc(){
    let temp = 0;

    // 연산자 종류에 따라 계산
    switch(operator){
      case '+' :
        temp = num1 + num2
        break;
      case '-' :
        temp = num1 - num2
        break;
      case '*' :
        temp = num1 * num2
        break;
      case '/' :
        temp = num1 / num2
        break;
      default:
        temp = 0
    }
    setResult(temp)
  }

  function clear(){
    setInput('')
    setNum1(0)
    setNum2(0)
    setOperator(null)
    setResult(null)
  }


  return (

    <div className="App">
      <h2>계산기</h2>
      <div>
        <div>식:{input}</div>
        <div>결과:{result}</div>
      </div>
      {/* 버튼 클릭하면 num state가 변경 */}
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => {
          return <button key={num} onClick={()=>{changeNumber(num)}}>{num}</button>
        })}
      </div>
      {/* 버튼 클릭하면 operator state가 변경됨 */}
      <div>
        {['+', '-', '*', '/'].map((op) => {
          return <button key={op} onClick={ ()=>{
            setInput(input + op)
            setOperator(op)
          } }>{op}</button>
        })}
      </div>
      <div>
        <button onClick={calc}>=</button>
        <button onClick={clear}>C</button>
      </div>
    </div>
  );
}

export default App;
