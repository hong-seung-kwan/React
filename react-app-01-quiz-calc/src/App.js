import { use, useState } from "react";

function App() {
  // 숫자 state 생성
  // state 생성시 초기값 필수
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  // 연산자를 state로 생성
  const [oper, setOper] = useState(null);
  // 전체 식을 state로 관리
  // 식은 숫자 또는 연산자를 선택했을 때 함께 업데이트
  const [input, setInput] = useState("");
  // 결과값을 state로 생성
  const [result, setResult] = useState(null);

  // number state를 처리하는 함수
  function setNumber(number) {
    // input() state 업데이트
    // 숫자와 연산자의 조합
    // 현재식에 새로운 num 더하기
    setInput(input + number);

    // 연산자 있으면 num2 없으면 num1
    if (oper === null) {
      setNum1(number);
    } else {
      setNum2(number);
    }
  }
  function setOperation(op) {
    setOper(op);
    // 식 업데이트
    setInput(input + op);
  }

  // 결과값 함수
  function calculate() {
    let tempResult = 0;
    switch (oper) {
      case "+":
        tempResult = num1 + num2;
        break;

      case "-":
        tempResult = num1 - num2;
        break;

      case "*":
        tempResult = num1 * num2;
        break;

      case "/":
        tempResult = num1 / num2;
        break;

      default:
        tempResult = 0;
        break;
    }
    setResult(tempResult);
  }
  function reset() {
    setNum1(null);
    setNum2(null);
    setOper(null);
    setInput("");
    setResult(null);
  }

  return (
    <div className="App">
      <h3>계산기</h3>

      <div>식:{input}</div>
      <div>결과:{result}</div>

      {/* 1~0 숫자 버튼 10개 생성 */}
      <div>
        {/* {}중괄호: 변수 또는 식을 작성하기 위한 표기법 */}
        {/* map함수: 배열의 요소를 하나씩 꺼내면서 반복 작업 수행 */}
        {/* 엘리먼트를 동적으로 생성할 때는 key 속성이 있어야함 */}
        {
          // 사용자가 숫자키를 누르면 state가 변경됨
          // 모든 숫자키에 이벤트 적용
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => {
            return (
              <button
                key={num}
                onClick={() => {
                  // 사용자가 선택한 숫자를 number state에 저장
                  setNumber(num);
                }}
              >
                {num}
              </button>
            );
          })
        }
      </div>
      {/* +,-,*,/ 버튼 생성*/}
      <div>
        {
          // 사용자가 연산자를 선택하면 state가 변경됨
          ["+", "-", "*", "/"].map((op) => {
            return (
              <button
                key={op}
                onClick={() => {
                  setOperation(op);
                }}
              >
                {op}
              </button>
            );
          })
        }
      </div>
      {/* 결과 계산하기 */}
      <button onClick={calculate}>=</button>
      <button onClick={reset}>C</button>
    </div>
  );
}

export default App;
