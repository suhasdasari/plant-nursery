import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import './ProductPage.css';

const products = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 29.99,
    image: '/plants/snake-plant.jpg',
    description: 'Low-maintenance plant perfect for beginners',
    category: 'Air Purifying'
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 34.99,
    image: '/plants/peace-lily.jpg',
    description: 'Beautiful flowering plant that purifies air',
    category: 'Air Purifying'
  },
  {
    id: 3,
    name: 'Monstera Deliciosa',
    price: 49.99,
    image: '/plants/monstera.jpg',
    description: 'Tropical plant with unique split leaves',
    category: 'Tropical'
  },
  {
    id: 4,
    name: 'Pothos',
    price: 24.99,
    image: '/plants/pothos.jpg',
    description: 'Easy-care trailing plant',
    category: 'Low Maintenance'
  },
  {
    id: 5,
    name: 'Spider Plant',
    price: 19.99,
    image: '/plants/spider-plant.jpg',
    description: 'Fast-growing, air-purifying plant',
    category: 'Air Purifying'
  },
  {
    id: 6,
    name: 'Fiddle Leaf Fig',
    price: 59.99,
    image: '/plants/fiddle-leaf.jpg',
    description: 'Popular tropical tree with large leaves',
    category: 'Tropical'
  }
];

function ProductPage({ cartItems, addToCart, cartCount }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="product-page">
      <NavigationBar cartCount={cartCount} />
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => {
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
                <p className="category-tag">{product.category}</p>
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