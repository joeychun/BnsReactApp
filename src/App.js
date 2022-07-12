import React from 'react';
import Home from './pages/home';
import Articles from './pages/articles';
import Videos from './pages/videos';

import { BrowserRouter, Routes, Route, Navigate, Redirect, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/articles' exact element={<Articles />} />
          <Route path='/videos' exact element={<Videos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
