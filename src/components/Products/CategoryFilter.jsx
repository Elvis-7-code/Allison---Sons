import React from 'react';
import { categories } from '../../../data/products';

function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      {categories.map(cat => (
        <button
          key={cat.id}
          className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
          onClick={() => onCategoryChange(cat.id)}
        >
          <span className="category-icon">{cat.icon}</span>
          <span className="category-name">{cat.name}</span>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;