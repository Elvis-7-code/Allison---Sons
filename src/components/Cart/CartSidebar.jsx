import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { getCart, getCartTotal, removeFromCart, updateQuantity } from '../../../utils/cartUtils';

function CartSidebar({ onClose }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const cartData = getCart();
    setCart(cartData);
    setTotal(getCartTotal(cartData));
  };

  const handleRemove = (id) => {
    removeFromCart(id);
    loadCart();
  };

  const handleUpdateQuantity = (id, quantity) => {
    updateQuantity(id, quantity);
    loadCart();
  };

  const handleWhatsAppOrder = () => {
    const message = cart.map(item => 
      `${item.name}: ${item.quantity} ${item.unit} @ KES ${item.price} = KES ${item.price * item.quantity}`
    ).join('\n');
    
    const totalMsg = `\n\nTOTAL: KES ${total}\n\nOrder from Hardware Hub`;
    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message + totalMsg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="cart-sidebar-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Your Cart 🛒</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <small>Add some construction materials to get started</small>
            </div>
          ) : (
            cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={handleRemove}
                onUpdateQuantity={handleUpdateQuantity}
              />
            ))
          )}
        </div>

        {cart.length > 0 && (
          <>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <strong>KES {total.toLocaleString()}</strong>
              </div>
              <button className="whatsapp-btn" onClick={handleWhatsAppOrder}>
                📱 Order on WhatsApp
              </button>
              <p className="delivery-note">
                *Delivery cost calculated upon order confirmation
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartSidebar;