import React from 'react';
import { products, categories } from '../data/products';

function Home() {
  const featuredProducts = products.filter(p => p.popular).slice(0, 6);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Quality Construction Materials</h1>
          <p>From foundation to finishing — we supply all your hardware needs</p>
          <a href="/products" className="hero-btn">Browse Products →</a>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {categories.slice(1).map(cat => (
            <a key={cat.id} href="/products" className="category-card">
              <span className="category-icon-large">{cat.icon}</span>
              <span>{cat.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <h2>Popular Products</h2>
        <div className="featured-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="featured-card">
              <div className="featured-icon">{product.image}</div>
              <h3>{product.name}</h3>
              <p className="featured-price">KES {product.price.toLocaleString()}/{product.unit}</p>
              <a href="/products" className="featured-link">View Details →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose Hardware Hub?</h2>
        <div className="features-grid">
          <div className="feature">
            <span>🚚</span>
            <h3>Fast Delivery</h3>
            <p>Same-day delivery within Nairobi</p>
          </div>
          <div className="feature">
            <span>💰</span>
            <h3>Best Prices</h3>
            <p>Direct from manufacturers</p>
          </div>
          <div className="feature">
            <span>✅</span>
            <h3>Quality Guaranteed</h3>
            <p>All materials certified</p>
          </div>
          <div className="feature">
            <span>📞</span>
            <h3>24/7 Support</h3>
            <p>Call or WhatsApp anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;