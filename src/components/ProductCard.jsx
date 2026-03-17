import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border border-gray-200 rounded-lg flex flex-col h-full">
      <div className="flex-grow p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <span className="inline-block text-sm">{product.category}</span>
      </div>

      <div className="px-4 py-3">
        <p className="text-lg font-bold mb-2">${product.price}</p>
        <p className="text-sm text-gray-700">
          <span
            className={product.stock > 0 ? "text-green-600" : "text-red-600"}
          >
            {product.stock > 0 ? `${product.stock} Available` : "Out of Stock"}
          </span>
        </p>
      </div>

      <button
        type="button"
        className="w-11/12 mx-auto mb-2 bg-indigo-600 text-white font-bold rounded-md px-5 py-1"
        disabled={product.stock === 0}
        onClick={() => onAddToCart(product)}
      >
        {product.stock > 0 ? "Add to Cart" : "Unavailable"}
      </button>
    </div>
  );
};

export default ProductCard;
