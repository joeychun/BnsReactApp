import React from 'react';
import Home from './content/home';
import { BrowserRouter, Routes, Route, Navigate, Redirect, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home show={true}/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
