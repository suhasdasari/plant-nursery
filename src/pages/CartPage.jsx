import React from 'react';
import NavigationBar from '../components/NavigationBar';
import './CartPage.css';

const products = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 29.99,
    image: '/plants/snake-plant.jpg'
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 34.99,
    image: '/plants/peace-lily.jpg'
  },
  {
    id: 3,
    name: 'Monstera Deliciosa',
    price: 49.99,
    image: '/plants/monstera.jpg'
  },
  {
    id: 4,
    name: 'Pothos',
    price: 24.99,
    image: '/plants/pothos.jpg'
  }
];

function CartPage({ cartItems, updateCartQuantity, removeFromCart, cartCount }) {
  const calculateTotal = () => {
    return Object.entries(cartItems).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return total + (product ? product.price * quantity : 0);
    }, 0);
  };

  return (
    <div className="cart-page">
      <NavigationBar cartCount={cartCount} />
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        {Object.keys(cartItems).length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {Object.entries(cartItems).map(([productId, quantity]) => {
                const product = products.find(p => p.id === parseInt(productId));
                if (!product) return null;

                return (
                  <div key={productId} className="cart-item">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h3>{product.name}</h3>
                      <p className="price">${product.price}</p>
                    </div>
                    <div className="cart-item-actions">
                      <button 
                        className="quantity-btn"
                        onClick={() => updateCartQuantity(parseInt(productId), -1)}
                      >
                        -
                      </button>
                      <span className="quantity">{quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => updateCartQuantity(parseInt(productId), 1)}
                      >
                        +
                      </button>
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(parseInt(productId))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart-summary">
              <div className="total">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage; 