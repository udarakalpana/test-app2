import React, { useEffect, useState } from "react";
import ProductList from "./ProductList.jsx";
import Cart from "./Cart.jsx";
import Swal from "sweetalert2";

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const dummyProducts = [
      { id: 1, name: "Phone", price: 2500, category: "Electronic", stock: 23 },
      { id: 2, name: "Laptop", price: 1200, category: "Electronic", stock: 4 },
      { id: 3, name: "Macbook", price: 3000, category: "Electronic", stock: 6 },
      {
        id: 4,
        name: "Keyboards",
        price: 1000,
        category: "Electronic",
        stock: 12,
      },
      { id: 5, name: "Mouse", price: 1900, category: "Electronic", stock: 9 },
      {
        id: 6,
        name: "Monitors",
        price: 500,
        category: "Electronic",
        stock: 99,
      },
    ];

    setTimeout(() => {
      setProducts(dummyProducts);
    }, 500);
  }, []);

  // product add to cart
  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);


    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? {...item, stock: item.stock + 1} : item));
    }
    else {
      setCart([...cart, { ...product, stock: 1 }]);
    }


  };

  // product remove from the cart
  const handleRemoveFromCart = (productId) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(cart.filter((item) => item.id !== productId));
      }
    });
  }

  // update cart product quantity

  return (
    <div className="max-w-6xl mx-auto">
      <header className="bg-white p-8 mb-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold">E-Commerce Product catalog</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-2 bg-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Available Products</h2>
          <ProductList products={products} onAddToCart={handleAddToCart} />
        </div>
      </div>

      <aside className="h-fit sticky top-5 bg-white">
        <Cart
          items={cart}
          onHandleRemoveFromCart={handleRemoveFromCart}
        />
      </aside>
    </div>
  );
};

export default ProductCatalog;
