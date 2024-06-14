import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Cardapio from './pages/cardapio.tsx';
import Admin from './pages/admin.tsx';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<App />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};
export default AppRoutes;
