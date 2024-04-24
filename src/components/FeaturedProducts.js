// FeaturedProducts.js
import React, { useContext } from "react";
import { CartContext } from '../context/CartContext';
import productlist from '../Ecommerce_Frontend_Assets/Assets/all_product'
import Product from "./Product";
const FeaturedProducts = () => {
  const { cart, setCart } = useContext(CartContext);

  const products = productlist;

  // Function to add product to cart
  const addToCart = (product) => {
    console.log("Cart:", cart);
    const existingItemIndex = cart?.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
