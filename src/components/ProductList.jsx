import React from "react";
import ProductCard from "./ProductCard.jsx";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
