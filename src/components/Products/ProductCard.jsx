import React, { useState } from 'react';
import { addToCart } from '../../../utils/cartUtils';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(product.minOrder || 1);
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        {!imgError ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="product-image-fallback">
            <span className="fallback-emoji">{product.emoji}</span>
          </div>
        )}
        {product.popular && <span className="popular-badge">🔥 Popular</span>}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">
          <span className="price">KES {product.price.toLocaleString()}</span>
          <span className="unit">/{product.unit}</span>
        </div>
        <div className="product-min-order">
          Min. order: {product.minOrder} {product.unit}
        </div>
        
        <div className="product-actions">
          <div className="quantity-selector">
            <button 
              className="qty-btn"
              onClick={() => setQuantity(Math.max(product.minOrder, quantity - 1))}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(product.minOrder, parseInt(e.target.value) || product.minOrder))}
              min={product.minOrder}
            />
            <button 
              className="qty-btn"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button 
            className={`add-btn ${added ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {added ? '✓ Added!' : `Add to Cart +`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;