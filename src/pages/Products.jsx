import React, { useState } from 'react';
import ProductList from '../components/Products/ProductList';
import CategoryFilter from '../components/Products/CategoryFilter';
import { products } from '../data/products';

function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Quality construction materials for every project</p>
      </div>

      <CategoryFilter 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Products;