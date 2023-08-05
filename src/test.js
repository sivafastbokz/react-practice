import React, { useEffect, useState } from 'react';



function Test(){
    const[data,setdata]=useState('posts');
    const[item,setItem]=useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${data}`)
          .then(response => response.json())
          .then(json => setItem(json))
        console.log('data')
        return()=>{
            console.log('data has changed')
        }
    },[data])
    return(
     <React.Fragment>
      <button onClick={()=>setdata('posts')}>post</button>
      <button onClick={()=>setdata('comments')}>comments</button>
      <button onClick={()=>setdata('users')}>users</button>
      <h1>{data}</h1>
      {item.map((items)=>{
        return <pre>{JSON.stringify(items)}</pre>
    })}
     </React.Fragment>
    )
}
export default Test;