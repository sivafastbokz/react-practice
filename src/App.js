import React from 'react';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './home';
import Product from './product';
import Main from './main';


function App() {
  return (
    <React.Fragment>
        <Router>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/homepage' element={<Home/>}></Route>
            <Route path='/productpage' element={<Product/>}></Route>
          </Routes>
        </Router>
    </React.Fragment>
  );
}

export default App;