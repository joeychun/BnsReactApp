import React from 'react';
import ForTest from './content/fortest';
import { BrowserRouter, Routes, Route, Navigate, Redirect, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <h1>HELLO WORLD</h1> */}
      <Routes>
        <Route path='/fortest' exact element={<ForTest show={true}/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
