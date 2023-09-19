/* import React, { useState } from 'react'
import '../ToDo List/ToDo.css'

function TotoInput(props) {
    const [inputData,setInputData]=useState('');
    const formHandler=(event)=>{
        event.preventDefault();
        if(inputData===''){
            alert('Your Goal is Empty')
        }else{

            props.getFromTodoInput(inputData);
            setInputData('')
        }
    }
  return (
    <div className='form' onSubmit={formHandler}>
            <h2 className='h2'>Add Goal</h2>
        <form className='form-item'>
            <input 
               type="text" 
               className='txt' 
               placeholder='Add your Goal'
               value={inputData}
               onChange={(e)=>setInputData(e.target.value)} 
               />
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default TotoInput */