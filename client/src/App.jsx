import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/messenger" element={<div>Messenger Page</div>} />
        <Route path="/profile/username" element={<div>Profile Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
