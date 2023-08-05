import React, { useState } from 'react';

function Heading() {
    const[name,setname]=useState('');
    const[msg,setmsg]=useState('');
      
    const message = (e)=>{
       setmsg(e.target.value)
    }

    const handlechange=(e)=>{
          setname(e.target.value)
    }
    const addname=()=>{
          setname('you are successfully entered your name')
      }
    return(
        <>
         <h1>{name}</h1>
         <input type='text' onChange={handlechange}></input>
         <button onClick={addname}>add</button>
         <br/>
         <input onChange={message} value={msg} type='text' placeholder='enter your message'></input>
         <p>{msg}</p>

        </>
    );
}
export default Heading;