import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Heading from './hook';
import reportWebVitals from './reportWebVitals';
import Lifecycle from './lifecycle';
// import Counter from './useEffect';
// import Test from './test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //  <App/>
    // <Heading/>
    <Lifecycle/>
    // <Counter/>
    // <Test/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
