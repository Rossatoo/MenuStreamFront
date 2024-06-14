import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Cardapio from './pages/cardapio';
import Admin from './pages/admin';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};
export default AppRoutes;
