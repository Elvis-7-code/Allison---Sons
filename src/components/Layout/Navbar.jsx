import React, { useState, useEffect } from 'react';
import CartIcon from '../Cart/CartIcon';
import { getCartCount } from '../../../utils/cartUtils';

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem('hardwareCart') || '[]');
      setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
    };
    
    updateCount();
    window.addEventListener('storage', updateCount);
    return () => window.removeEventListener('storage', updateCount);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <a href="/">
            <span className="logo-icon">🏗️</span>
            <span className="logo-text">Hardware<span>Hub</span></span>
          </a>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="nav-actions">
          <CartIcon count={cartCount} />
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;