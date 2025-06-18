import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Calc from "./component/Calc";

export const calcSlice = createSlice( {
  name: 'calcSlice',
  initialState: {result:null},
  reducers: {
    '+': (state,action) => {
      state.result = action.num1 + action.num2
    },
    '-': (state,action) =>{state.result = action.num1 - action.num2},
    '*': (state,action) =>{state.result = action.num1 * action.num2},
    '/': (state,action) =>{state.result = action.num1 / action.num2},
    '0': (state,action) =>{state.result = null},
  }
})

function App() {

  const store = configureStore( {
    reducer: {
      calc:calcSlice.reducer
    }
  })
  return (
    <div className="App">
      <h3>계산기</h3>
      <Provider store={store}>
        <Calc></Calc>
      </Provider>
    </div>
  )
}

export default App;