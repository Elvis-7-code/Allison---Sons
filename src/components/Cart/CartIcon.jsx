import React, { useState } from 'react';
import CartSidebar from './CartSidebar';

function CartIcon({ count }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="cart-icon" onClick={() => setIsOpen(true)}>
        <span className="cart-icon-emoji">🛒</span>
        {count > 0 && <span className="cart-count">{count}</span>}
      </button>
      
      {isOpen && <CartSidebar onClose={() => setIsOpen(false)} />}
    </>
  );
}

export default CartIcon;