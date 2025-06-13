import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { calcSlice } from '../App';

const Calc = () => {
    
    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [operator, setOperator] = useState(null);
    const [input, setInput] = useState('');

    const inputNumber = (value) => {
        setInput(input + value);
    
        if (operator === null) {
          setNum1(value);
        } else {
          setNum2(value);
        }
      };
    
      const inputOper = (value) => {
        setInput(input + value);
        setOperator(value);
      };

      const dispatch = useDispatch();
      // redux store에서 result state 꺼내기
      // 이제 store에 slice가 추가되어
      // slice를 먼저 꺼내고 state를 꺼내야함
    
      const clear = () => {
        setInput('');
        dispatch({ type: 'calcSlice/0' });
        setNum1(null);
        setNum2(null);
        setOperator(null);
        dispatch(calcSlice.actions[0])
      };

      // 스토어의 계산기슬라이스의 result 꺼내기
      const result = useSelector((state)=>{
        
        return state.calc.result
      });

  return (
    <div>
        <div>
        <div><span>식:</span>{input}</div>
        <div><span>결과:</span>{result}</div>
      </div>

      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => inputNumber(num)}>
            {num}
          </button>
        ))}
      </div>
      <div>
        {['+', '-', '*', '/'].map((op) => (
          <button key={op} onClick={() => inputOper(op)}>
            {op}
          </button>
        ))}
      </div>
        {/* 액션은 슬라이스이름/명령으로 수정 */}
        {/* 예: calcSlice/+ calcSlice/- */}
        {/* toolkit은 액션함수를 자동으로 생성함 */}
      <button onClick={() => {
        dispatch({ type: "calcSlice/"+operator, num1: num1, num2: num2 })

        // 인자: 작업에 필요한 두 숫자
        dispatch( calcSlice.actions[operator]({num1: num1, num2: num2}))
      }}>=</button>

      <button onClick={clear}>C</button>
    </div>
  )
}

export default Calc