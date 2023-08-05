import React ,{useEffect, useState}from 'react';
import { useNavigate } from 'react-router-dom';


function Main(){
    const [time,setTime]=useState(0)
    const navigate = useNavigate();
    useEffect(()=>{
       let interval=  setInterval(()=>{
            setTime(time +1)
         },1000)
         return()=>{
            clearInterval(interval)
         }
      },[time])
      
    return(
        <React.Fragment>
         <ul style={{listStyleType:'none'}}>
          <li><a href='Home page' onClick={()=>navigate('/homepage')}>Home page</a></li>
          <li><a href='product page' onClick={()=>navigate('/productpage')}>Product page</a></li>
        </ul>
        <p>{time}</p>
       </React.Fragment>
    )
}

export default Main;