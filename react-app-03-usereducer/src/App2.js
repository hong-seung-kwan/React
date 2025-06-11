import { useReducer, useState } from 'react';
import './App.css';



function App() {


  let [num, setNum] = useState(0);


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


  const [count, countDispatch]  = useReducer(countReducer, 0)

  
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
      <input type='text' value={num} onChange={ (event) => {
        setNum(Number(event.target.value))
      } }></input>
      <span>{count}</span>
    </div>
  );
}

export default App;
