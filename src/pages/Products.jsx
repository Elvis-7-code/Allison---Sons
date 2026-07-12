import React, { useState, useEffect } from "react";
import ProductCard from "../components/Products/ProductCard";
import { getProductsByCategory } from "../data/products";

function Products({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = getProductsByCategory(category);
    setProducts(filteredProducts);
  }, [category]);

  return (
    <section className="products-section">
      {products.length === 0 ? (
        <div className="no-products">
          <p>No products found in this category.</p>
        </div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;