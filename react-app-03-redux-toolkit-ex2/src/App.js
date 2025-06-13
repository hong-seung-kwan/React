import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useReducer, useState } from "react"
import { Provider } from "react-redux";
import Calc from "./component/Calc";


// 계산기에서 result와 state만 redux로 관리하는 중
// redux => redeux toolkit 으로 변경

// slice를 먼저 생성하고 slice 여러개를 모아서 store 생성


// 1. 계산기에 필요한 slice 생성
  // 인자: 슬라이스이름, state초기값, reducer함수
  // 외부에서 사용할 수 있도록 slice를 export
  export const calcSlice = createSlice( { 
    name: 'calcSlice',
    initialState: {result:null}, // state 목록
    // state를 변경하는 함수들
    // 액션이름: 처리할 함수
    reducers: {
      // state 중에서 result값을 변경하기
      // '+' 명령이 들어오면 두 숫자를 더하기
      // 인자: 현재 state값, 액션(명령과 작업에 필요한 데이터)
      '+': (state, action)=>{
        // 액션 함수를 쓰면 데이터가 payload로 돌아옴
        state.result = action.payload.num1 + action.payload.num2
      },
      '-': (state, action)=>{state.result = action.payload.num1 - action.payload.num2},
      '*': (state, action)=>{state.result = action.payload.num1 * action.payload.num2},
      '/': (state, action)=>{state.result = action.payload.num1 / action.payload.num2},
      '0': (state, action)=>{state.result = null},
    }
  } )

function App() {

  // redux toolkit의 기능
  // 기존의 reducer는 state의 불변성을 유지하기 위해
  // state를 복제한 다음에 사용했음
  // 하지만 toolkit에서는 state를 바로 사용할 수 있음

  


  const store = configureStore( {
    // 슬라이스이름: 리듀서
    reducer: {
      calc :calcSlice.reducer
    }
  } )
  return (
    <div className="App">
       <h3>계산기</h3>
       {/* redux의 poriver로 store를 주입 */}
      <Provider store={store}>
        <Calc></Calc>
      </Provider>
    </div>
  );
}

export default App;
