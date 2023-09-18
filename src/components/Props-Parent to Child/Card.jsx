import React from 'react'
import '../App.css'

function Card(props) {
  return (
    <div>
        <div className='container'>
        <h1>{props.name}</h1>
        <div className='content'>
        <h3>{props.grade}</h3>
        <h3>{props.stream}</h3>
        </div>
        </div>

    </div>
  )
}

export default Card