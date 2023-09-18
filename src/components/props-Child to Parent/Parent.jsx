/* import React, { useState } from 'react'
import Child from './Child'
import '../App.css'

function Parent() {

  const [yesCount,setYesCount]=useState(0);
  const [noCount,setNoCount]=useState(0);
 
  const countHandler=(select,input)=>{
    
    if (select==='y'){
      setYesCount(prev=>(prev+1))
      console.log(`Vote Person Name: ${input}=> Vote : ${select}`)
    }
    else{
      setNoCount(prev=>(prev+1))
      console.log(`Vote Person Name: ${input}=> Vote : ${select}`)
    }
  }
  
    
  return (
    <div>
      <div className='vote'>
        <h1>Vote for Mentor :</h1>
        <div className='votebox yes'>Yes<span>{yesCount}</span></div>
        <div className='votebox no'>No<span>{noCount}</span></div>
      </div>
        <Child getFromChild={countHandler}/>
    </div>
  )
}

export default Parent */