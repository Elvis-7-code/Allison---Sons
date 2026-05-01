import React from 'react';

function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <span className="cart-item-icon">{item.image}</span>
        <div className="cart-item-details">
          <div className="cart-item-name">{item.name}</div>
          <div className="cart-item-price">
            KES {item.price} / {item.unit}
          </div>
        </div>
      </div>
      
      <div className="cart-item-actions">
        <div className="quantity-control">
          <button 
            className="qty-btn"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button 
            className="qty-btn"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <button 
          className="remove-btn"
          onClick={() => onRemove(item.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default CartItem;