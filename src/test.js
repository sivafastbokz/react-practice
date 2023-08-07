import React, { useEffect, useState } from 'react';

function Test(){
    const[data,setdata]=useState('posts');
    const[item,setItem]=useState([]);
    // console.log('useState')

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${data}`)
          .then(response => response.json())
          .then(json => setItem(json))
        console.log('useEffect:data')
        return()=>{
            console.log('useEffect:data has changed')
        }
    },[data])
    return(
     <React.Fragment>
        {/* {console.log('div')} */}
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