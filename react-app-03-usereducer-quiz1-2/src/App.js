import { useReducer, useState } from 'react';
import './App.css';
// useState -> usereducer 변경
function App() {

  const [content, setContent] = useState('')
  const [nextId, setNextId] = useState(1)

  // reducer: state를 한곳에서 관리하는 함수, 체계적으로 관리하는 도구

  // 1.reducer 함수 만들기
  // 매개변수: 이전state값, 액션
  // 리턴값: 새로운 state
  // 리듀서는 함수내부에서 list가 아닌 다른 state를 직접 쓰면 안됨
  function reducerList(oldState, action){

    if(action.type === 'add'){
      const newTodo = {id:action.id, content:action.content}
      const newList = [...oldState]
      newList.push(newTodo)
      return newList
    }else if(action.type === 'delete'){
      const newList = [...oldState]
      const filterList = newList.filter(todo=>todo.id !== action.id)
      return filterList
    }else if(action.type === 'reset'){
      return []
    }
  }

  // 2. state와 dispatch 함수 만들기
  // 인자: reducer 함수와 state 초기값
  // 반환값: 현재 state, dispatch라는 함수
  const [list, dispatchList] = useReducer(reducerList, [])

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="box">
        <input type="text" value={content} onChange={(e) => {
          setContent(e.target.value)
        }}></input>
        {/* set함수 -> dispatch함수 */}
        {/* dispatch: 명령을 전달하려 reducer함수로 state 변경 */}
        <button onClick={() => {
          dispatchList( {type:'add', id:nextId, content:content} )
          setContent('')
          setNextId(nextId + 1)
        }}>추가</button>
        <button onClick={() => {
          dispatchList( {type:'reset'} )
         }}>초기화</button>
      </div>
      <ul>
        {/* setState -> dispatch */}
        {list.map((todo) => {
          return (<li key={todo.id}>{todo.content}
            <button onClick={() => {
              dispatchList( {type:'delete', id:todo.id} )
            }}>삭제</button></li>)
        })}
      </ul>
    </div>
  );
}

export default App;
