import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {

  const [input, setInput] = useState('')

  const todolist = useSelector((state) => state.todo.todolist);

  const dispatch = useDispatch();

  return (
    <div>
      <input
      type='text'
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      placeholder='새 할 일 입력'
      />
      <button onClick={()=>{
        dispatch({type: 'todoSlice/ADD', text:input});
        setInput('');
      }}>추가</button>
      <button onClick={()=>dispatch({type:'todoSlice/RESET'})}>초기화</button>
      <ul>
        {todolist.map(todo=>(
          <li key={todo.id}>{todo.text}
          <button onClick={()=>dispatch({type:'todoSlice/DELETE', id:todo.id})}>
            삭제
            </button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo