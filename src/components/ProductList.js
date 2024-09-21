import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div id="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
