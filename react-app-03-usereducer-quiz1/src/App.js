import { useState } from 'react';
import './App.css';

function App() {
  
  const [list, setList] = useState([])
  const [input, setInput] = useState('')

  function add(){
    setList([...list,{id:list.length+1, content:input}])
    setInput('')
  }
  function clear(){
    setList([])
  }
  function remove(item){
    setList(list.filter(obj=> obj.id !== item.id))
    
  }
  return (
    <div className="App">
      <h2>To-Do-List</h2>
      <div>
        <input type="text" value={input} placeholder="새 할 일 입력" onChange={(e)=>{setInput(e.target.value)} }></input>
        <button onClick={add}>추가</button>
        <button onClick={clear}>초기화</button>
      </div>
      <div>
        {list.map((item=><ul><li key={item.id}>{item.content}<button onClick={()=>{
          remove(item)
          }}>삭제</button></li></ul>))}
      </div>
    </div>
  );
}

export default App;
