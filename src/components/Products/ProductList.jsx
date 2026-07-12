// src/components/Products/ProductList.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getProductsByCategory } from '../data/products';3

function ProductList({ category = "All" }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = getProductsByCategory(category);
    setProducts(filteredProducts);
  }, [category]);

  if (products.length === 0) {
    return (
      <div className="no-products">
        <p>No products found in this category</p>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;