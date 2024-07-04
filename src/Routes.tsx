import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import Cart from './pages/cart';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default AppRoutes;
