// pages/Cart.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <div className="container">
      <h1>Itens no Carrinho</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td><img src={item.image} alt={item.name} className="cart-image" /></td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>R$ {item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
