import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './pages/Home';
import Products from './pages/Products';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;