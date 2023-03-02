import React, { useReducer } from 'react'
import { todoReducer } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
const App = () => {
  const initialArray = [];
  const [state,dispatch] = useReducer(todoReducer, initialArray)
  
 
  return (
    <div id="main">
      <AddTodo dispatch={dispatch}/>
      {
        state.map((item, idx)=>(
          <Todo key={idx} data={item} dispatch={dispatch}/>
        ))
      }
    </div>
  )
}


export default App;
