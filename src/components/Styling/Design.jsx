import React, { useState } from 'react'
import '../Styling/design.css'

function Design() {
    const [inputValue,setInputValue]=useState('');
    const [selectValue,setSelectValue]=useState('');
    const [inputMark,setInputMark]=useState('');

    const [result,setResult]=useState('');
    const [name,setName]=useState('');
    const [mark,setMark]=useState(0);

    


    const formHandler=(event)=>{
        event.preventDefault();

        console.log('inputMark:', inputMark);
    console.log('selectValue:', selectValue)

        if(inputValue.trim()!=='' && inputMark.trim()!==''){
            console.log("fill")
            setName(inputValue)
            
            const mark=Number(inputMark);
            
            
            if (mark >= 40 && selectValue === 'pass') {
                setResult('DIT');
            } else if (selectValue === 'pass' && mark < 40) {
                setResult('repeat');
            } else {
                setResult('Fail');
            }
    
            setInputMark('');
            setInputValue('');
            setSelectValue('');
            setMark(mark);
        }
        
    }
  return (
    <div>
        <h1>{`User Name: ${name}`}</h1>
        <h2 className={`${(mark >= 40 && selectValue === 'pass')? 'dit':(selectValue === 'pass' && mark < 40)?'reapat':'fail'}`}>Status:{result}</h2>

     <div className='form-container'>
        <form onSubmit={formHandler}>
            <h3>SEM3 RESULT</h3>
            <div>
            <label htmlFor="fName">Full Name</label>
            <input 
               type="text" 
               id='fName' 
               value={inputValue} 
               onChange={(e)=>setInputValue(e.target.value)}/>
            </div>

            <div>
            <label htmlFor="csk">CSK II</label>
            <select id="csk" value={selectValue} onChange={(e)=>setSelectValue(e.target.value)}>
                <option default selected disabled>Select Option</option>
                <option value="pass">Pass</option>
                <option value="fail">Fail</option>
            </select>
            </div>
            <div>
            <label htmlFor="dsa">Data Structure</label>
            <input 
                type="number" 
                id='dsa' 
                value={inputMark} 
                onChange={(e)=>setInputMark(e.target.value)}/>
            </div>

            <button className='btn' type='submit'>SUBMIT</button>
        </form>
    </div>
    </div>
  )
}

export default Design