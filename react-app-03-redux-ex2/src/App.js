import { useReducer, useState } from "react"
import { Provider } from "react-redux";
import { createStore } from "redux";
import Calc from './components/calc';



 function reducer(oldState, action){

    let newState = {...oldState}


    switch(action.type){
      case '+':
        newState.result = action.num1 + action.num2
        break;
      case '-':
        newState.result = action.num1 - action.num2
        break;
      case '*':
        newState.result = action.num1 * action.num2
        break;
      case '/':
        newState.result = action.num1 / action.num2
        break;
      case '0':
        newState.result = null
        break
      default:
        newState.result = null
    }

    return newState;
  }



function App() {

  const init = {result: null}
  const store = createStore(reducer, init)
  return (
    <div className="App">
      <h2>계산기</h2>
      <Provider store={store}>
        <Calc></Calc>
      </Provider>
      
      
    </div>
  );
}

export default App;
