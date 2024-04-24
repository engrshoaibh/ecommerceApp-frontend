import React from "react";

const Product = ({ product, addToCart }) => {
   
  return (
    <div
      key={product.id}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="p-6">
        <div className="mb-4 ">
          <img
            src={product.image} // Assuming product.image contains the URL of the image
            alt={product.name} // Alt text for accessibility
            className="w-50 h-50 rounded-lg"
          />
        </div>
        <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
        {product.oldPrice && (
          <p className="text-gray-500 line-through">${product.old_price.toFixed(2)}</p>
        )}
        <p className="text-gray-700">${product.new_price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)} // Call addToCart function with the product as parameter
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
