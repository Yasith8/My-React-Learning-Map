import React, { useState } from 'react'
import AgeInput from './AgeInput'
import AgeErr from './AgeErr';

function AgeList() {
    const [userList,setUserList]=useState([]);
    const userDataFunc=(name,age)=>{
        const newObj={name:name,age:age};
        setUserList([...userList,newObj]);
    }

    let isValid;
    const userConformFunc=(data)=>{
      isValid= data;
      return isValid;
    }
  return (
    <div className='main-container'>
        <div className="user-input">
        <AgeInput 
           userData={userDataFunc}
           userConform={userConformFunc}
           />
        </div>
        <div>
          {(isValid==true)?
          <AgeErr />:""
        }
        </div>
        <div className="ul-list">
        <ul className='list'>
            {userList.map(e=>(
                <li className='list-item'>User Name : {e.name}, User Age: {e.age}</li>
                ))}
        </ul>
    </div>
    </div>
  )
}

export default AgeList