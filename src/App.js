import React from 'react';
import Home from './pages/home';
import Articles from './pages/articles';
import Article from './pages/article';
import Videos from './pages/videos';
import Video from './pages/video';
import Contact from './pages/contact';
import Profile from './pages/profile';

import Menu from './component/Header/menu';
import FooterBar from './component/Footer/footerbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/articles/:id' exact element={<Article />} />
            <Route path='/articles' exact element={<Articles />} />
            <Route path='/videos/:id' exact element={<Video />} />
            <Route path='/videos' exact element={<Videos />} />
            <Route path='/contact' exact element={<Contact />} />
            <Route path='/profile/:id' exact element={<Profile />} />
          </Routes>
        </div>
        <FooterBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
