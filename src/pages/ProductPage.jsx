import React from 'react';
import NavigationBar from '../components/NavigationBar';
import './ProductPage.css';

const products = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 29.99,
    image: '/plants/snake-plant.jpg',
    description: 'Low-maintenance plant perfect for beginners'
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 34.99,
    image: '/plants/peace-lily.jpg',
    description: 'Beautiful flowering plant that purifies air'
  },
  {
    id: 3,
    name: 'Monstera Deliciosa',
    price: 49.99,
    image: '/plants/monstera.jpg',
    description: 'Tropical plant with unique split leaves'
  },
  {
    id: 4,
    name: 'Pothos',
    price: 24.99,
    image: '/plants/pothos.jpg',
    description: 'Easy-care trailing plant'
  }
];

function ProductPage({ cartItems, addToCart, cartCount }) {
  return (
    <div className="product-page">
      <NavigationBar cartCount={cartCount} />
      <div className="product-grid">
        {products.map((product) => {
          const isInCart = cartItems[product.id] > 0;
          return (
            <div key={product.id} className="product-card">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-footer">
                  <span className="price">${product.price}</span>
                  <button 
                    className={`add-to-cart ${isInCart ? 'added' : ''}`}
                    onClick={() => addToCart(product.id)}
                    disabled={isInCart}
                  >
                    {isInCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductPage; 