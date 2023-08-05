import React from 'react';
import { useNavigate } from 'react-router-dom';

function Product(){
    const navigate = useNavigate();
    return(
     <React.Fragment>
        <h1>Product Page</h1>
        <button onClick={()=>navigate('/')}>BACK</button>
     </React.Fragment>
    )
}
export default Product;