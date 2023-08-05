import React, { useEffect, useState } from 'react';


function Counter(){
    const[timer,setTimer]=useState(0);
    console.log('useState')
    function plus(){
        setTimer(timer +1)
    }
    function minus(){
        setTimer(timer -1)
    }
    useEffect(()=>{
        console.log('useeffact')
       return()=>{
        console.log('clean up')
       }
    },[timer])
    return(
    <React.Fragment>
        <button onClick={plus}>+</button>
        <span>{timer}</span>
        <button onClick={minus}>-</button>
        {console.log('div')}
   </React.Fragment>
    )
}
export default Counter;