import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();
    return(
     <React.Fragment>
        <h1>Home Page</h1>
        <button onClick={()=>navigate('/')}>BACK</button>
     </React.Fragment>
    )
}
export default Home;