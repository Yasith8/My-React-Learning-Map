import React, { useState } from 'react'
import './AgeProject.css'

function AgeInput(props) {

    const [userName,setUserName]=useState('');
    const [userAge,setUserAge]=useState('');
    // const [inpnutInvalid,setInputInvalid]=useState(false);
    

    

    const submitHandler=(event)=>{
        event.preventDefault();
       if((userAge==='' && userName==='')|| (userAge<=0)){
        props.userConform(true)
      }else{
        props.userData(userName,userAge)
        props.userConform(false)
        setUserAge('');
        setUserName('');
       }
    }

  
  return (
    <div>
      <div className='container'>
        <form className='form' onSubmit={submitHandler}>
            <h3>UserName:</h3> 
            <input type="text" className='name' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <h3>Age:</h3> 
            <input type="number" className='age' value={userAge} onChange={(e)=>setUserAge(e.target.value)}/><br />
            <button type="submit" className='btn'>Submit</button>
        </form>

      </div>
     {/*    <div className={`err ${(inpnutInvalid===true)?'':'show'}`}>
            <div className="card">
                 <div className='card-head'>
                    <h1>Invalid Input</h1>
                 </div>
                 <div className='card-body'>
                    <h2>Your Name or Age Not Valied</h2><br />
                    <button type="submit" className='err-btn' onClick={errHandler}>OK</button>
                 </div>
                 <div className="err-op">
                 </div>
            </div>
            
        </div> */}
    </div>
  )
}

export default AgeInput