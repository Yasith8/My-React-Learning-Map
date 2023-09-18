/* import React, { useState } from 'react'

function Child(props) {

  const [inputData,setInputData]=useState("");
  const [selectData,setSelectData]=useState("y");

  const formHandler=(event)=>{
    event.preventDefault();

    props.getFromChild(selectData,inputData);
    setInputData("");
    setSelectData("");

  }



  return (
    <div style={{backgroundColor:'gray'}}>
        <h1>Voting Area</h1>

        <form onSubmit={formHandler}>
        <input 
           type="text" 
           id='input'
           value={inputData}
           onChange={(e)=>setInputData(e.target.value)} 
           />
        <select value={selectData} onChange={(e)=>setSelectData(e.target.value)}>
          <option value="y">Yes</option>
          <option value="n">No</option>
          </select>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Child */