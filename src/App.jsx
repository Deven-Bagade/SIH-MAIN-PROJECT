import React from 'react';
import './App.css';
import Navbarmain from './components/Navbarmain';
import Bodymain from './components/Bodymain';
import News from './components/News'; // Make sure News is correctly imported
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Guid from './components/Guid';

function App() {
  return (
    <BrowserRouter basename="/SIH-MAIN-PROJECT">
      <Navbarmain />
      <Routes>
        
        <Route path="/" element={<Bodymain />} />
        <Route path="/news" element={<News />} />
        <Route path="/guid" element={<Guid />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
