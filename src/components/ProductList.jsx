import React from "react";
import ProductCard from "./ProductCard.jsx";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
