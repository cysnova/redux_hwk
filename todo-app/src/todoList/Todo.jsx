import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './todoSlice';


const TodoList = () => {
 
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAddTodo = (e) => {

    e.preventDefault();
    dispatch(addTodo(input))
  }
  

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTodo}>
      <input type="text" style={{width:'400px' ,height:'40px',textIndent:'10px' }} onChange={(e)=>setInput(e.target.value)} />

      <button type="submit" style={{margin:'5px' }}>Add</button>
      </form>
      
        <ul  style={{ listStyle: 'none'}}>
        {todo.map((t) => (
          <li key={t.id} style={{display:'flex', flexDirection:'row', gap:'20px', margin:'10px', alignItems:'center'}} >
            <input type="checkbox" checked={t.completed} onChange={() => handleToggleTodo(t.id)}/>
            <h2>{t.text} {t.completed?'(Completed)':''}</h2>
            <button onClick={() => handleDeleteTodo(t.id)} style={{height:'40px' }}>Delete</button>

          </li>
        ))}
      </ul>
     
      
    </div>
  );
};

export default TodoList;
