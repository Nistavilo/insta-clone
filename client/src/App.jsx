import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import InstaRegister from './pages/Register';
import InstaProfile from './pages/Profile';
import InstaMessenger from './pages/Messenger';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/messenger" element={<InstaMessenger/>} />
        <Route path="/profile" element={<InstaProfile/>} />
        <Route path="/login" element = {<InstaRegister/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
