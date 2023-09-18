import React, { useState } from 'react'
import TotoInput from './TotoInput'

function TodoList() {

  const [todo,setTodo]=useState([]);

  const myAr=(data)=>{
    setTodo([...todo,data])
  }
  
  const listHandler=(data)=>{
    myAr(data)
    }


  return (
    <div>
    <div className='todo'>
        <TotoInput getFromTodoInput={listHandler}/>
    </div>
    <div className='list'>
  <ul id='ul'>
  {todo.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
    </div>
    </div>
  )
}

export default TodoList