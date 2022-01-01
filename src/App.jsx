import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// scss
import './App.scss';

// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
