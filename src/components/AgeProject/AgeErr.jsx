import React from 'react'

function AgeErr() {
  return (
    <div>
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
            
        </div>
  )
}

export default AgeErr