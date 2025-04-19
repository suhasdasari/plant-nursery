import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productId) => {
    setCartItems(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const updateCartQuantity = (productId, change) => {
    setCartItems(prev => {
      const newQuantity = Math.max(0, (prev[productId] || 0) + change);
      const newCart = { ...prev };
      if (newQuantity === 0) {
        delete newCart[productId];
      } else {
        newCart[productId] = newQuantity;
      }
      return newCart;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((sum, quantity) => sum + quantity, 0);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/products" 
          element={
            <ProductPage 
              cartItems={cartItems} 
              addToCart={addToCart}
              cartCount={getTotalItems()}
            />
          } 
        />
        <Route 
          path="/cart" 
          element={
            <CartPage 
              cartItems={cartItems}
              updateCartQuantity={updateCartQuantity}
              removeFromCart={removeFromCart}
              cartCount={getTotalItems()}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;