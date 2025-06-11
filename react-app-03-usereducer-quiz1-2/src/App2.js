import { useState } from 'react';
import './App.css';

function App() {

  // useState or useReducer

  const [list, setList] = useState([])

  // 사용자가 입력한 내용
  const [content, setContent] = useState('')

  const [nextId, setNextId] = useState(1)
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="box">
        {/* 입력필드의 value를 state로 변경 */}
        <input type="text" value={content} onChange={ (e)=>{
          setContent(e.target.value)
        } }></input>
        <button onClick={()=>{
          const newTodo = {id:nextId, content:content}
          list.push(newTodo)
          // 배열은 object로 주소값을 가지고 있음
          // 배열에 새로운 요소를 추가해도 주소값에는 변화 x
          // 따라서 state는 업데이트 안됨
          const newList = [...list]
          setList(newList)
          // todo가 추가됬으면 입력필드 초기화
          setContent('')
          // todo 추가가 끝났으면 nextid 1만큼 증가
          setNextId(nextId + 1)
          console.log(list)
        }}>추가</button>
        <button onClick={()=>{setList([])}}>초기화</button>
      </div>
      {/* react에서 태그를 동적으로 생성할 때는 key입력 */}
      <ul>
        {list.map( (todo)=>{
          return (<li key={todo.id}>{todo.content}
          <button onClick={ ()=>{
            // list에서 선택한 todo를 제거
            const newList = [...list]
            // filter 함수는 true가 반환된 요소만 남김
            const filterList = newList.filter(obj=> obj.id !== todo.id)
            setList(filterList)
          } }>삭제</button></li>)
        } )}
      </ul>
    </div>
  );
}

export default App;
