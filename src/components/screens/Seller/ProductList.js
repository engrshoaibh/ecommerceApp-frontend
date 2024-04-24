// ProductList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditProductModal from './EditProductModal'; // Import the EditProductModal component

const ProductList = ({ onAddProduct }) => {
  // Mock product data for demonstration
  const products = [
    {
      name: "Product 1",
      price: 49.99,
      images: [
        "https://example.com/product1/image1.jpg",
        "https://example.com/product1/image2.jpg",
        "https://example.com/product1/image3.jpg"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus ut nisl imperdiet suscipit."
    },
    {
      name: "Product 2",
      price: 79.99,
      images: [
        "https://example.com/product2/image1.jpg",
        "https://example.com/product2/image2.jpg",
        "https://example.com/product2/image3.jpg"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus ut nisl imperdiet suscipit."
    },
    {
      name: "Product 3",
      price: 99.99,
      images: [
        "https://example.com/product3/image1.jpg",
        "https://example.com/product3/image2.jpg",
        "https://example.com/product3/image3.jpg"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus ut nisl imperdiet suscipit."
    },
    {
      name: "Product 4",
      price: 129.99,
      images: [
        "https://example.com/product4/image1.jpg",
        "https://example.com/product4/image2.jpg",
        "https://example.com/product4/image3.jpg"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus ut nisl imperdiet suscipit."
    },
    {
      name: "Product 5",
      price: 159.99,
      images: [
        "https://example.com/product5/image1.jpg",
        "https://example.com/product5/image2.jpg",
        "https://example.com/product5/image3.jpg"
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus ut nisl imperdiet suscipit."
    }
  ];

  // State to track the selected product for editing
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to handle the click event on the Edit link
  const handleEditClick = (productId) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={onAddProduct}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Product
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded-md p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">Price: ${product.price}</p>
            <div className="flex justify-end">
              <button className="text-blue-500 hover:underline"
                onClick={() => handleEditClick(product.id)} >Edit</button>

              <button className="text-red-500 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && <EditProductModal product={selectedProduct} onCloseModal={() => setSelectedProduct(null)} />}
    </div>
  );
};

export default ProductList;
