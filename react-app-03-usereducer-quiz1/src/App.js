import { useReducer, useState } from 'react';
import './App.css';

function App() {
  
  const [list, dispatchList] = useReducer(reducerList,[])
  const [input, setInput] = useState('')
  const [nextId, setNextId] = useState(1)

  function reducerList(oldState, action){
    if(action.type === 'add'){
      const newList = [...oldState,action]
      return newList
    }
  }


  return (
    <div className="App">
      <h2>To-Do-List</h2>
      <div>
        <input type="text" value={input} placeholder="새 할 일 입력" onChange={(e)=>{setInput(e.target.value)} }></input>
        <button onClick={()=>{
          dispatchList({type:'add', id:nextId, content:input})
          setNextId(nextId+1)
          setInput('')
        }}>추가</button>
        <button onClick={''}>초기화</button>
      </div>
      <div>
        {list.map((item=><ul><li key={item.id}>{item.content}<button onClick={()=>{
          
          }}>삭제</button></li></ul>))}
      </div>
    </div>
  );
}

export default App;
