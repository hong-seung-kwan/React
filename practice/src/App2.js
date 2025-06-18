import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Todo from "./component/Todo";

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {todolist:[]},
    reducers: {
      'ADD': (state, action) => {
        let newId = 0;
        if(state.todolist.length !== 0){
          newId = state.todolist.length;
        }
        state.todolist.push({id: newId, text:action.text})
      },
      'DELETE': (state,action) => {
        state.todolist = state.todolist.filter(todo => todo.id !== action.id)
      },
      'RESET': (state,action) => {
        state.todo = []
      }
    }

  })

function App() {

  const store = configureStore({
    reducer:{
      todo:todoSlice.reducer
    }
  })

  return (
    <div>
      <h3>To-Do List</h3>
      <Provider store={store}>
        <Todo></Todo>
      </Provider>
    </div>
  );
}
export default App;
