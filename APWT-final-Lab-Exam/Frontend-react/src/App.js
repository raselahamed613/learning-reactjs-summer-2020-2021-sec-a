import logo from './logo.svg';
import './App.css';

import Profile from './Profile';
import React from 'react';
import Register from './Register' ;

import Addproduct from './Addproduct';
function App() {
  return (
    <div className="App">
     <Register/>
     <Addproduct/>
    </div>
  );
}

export default App;
