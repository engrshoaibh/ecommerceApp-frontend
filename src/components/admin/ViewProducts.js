import React, { useState } from 'react';
import TableHOC from './table/TableHOC'; // Assuming you have the TableHOC component defined
import { FaSearch } from 'react-icons/fa';
import Sidebar from './Sidebar';

const ViewProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const [products, setProducts] = useState([
    { id: 1, name: "iPhone 13", category: "Smartphones", price: "$999.99", description: "The latest iPhone model with advanced features." },
    { id: 2, name: "Samsung Galaxy S22", category: "Smartphones", price: "$899.99", description: "High-end Android smartphone with powerful specs." },
    { id: 3, name: "Dell XPS 15", category: "Laptops", price: "$1499.99", description: "Premium laptop with a stunning display and performance." },
    { id: 4, name: "Sony PlayStation 5", category: "Gaming Consoles", price: "$499.99", description: "Next-gen gaming console with powerful hardware." },
    { id: 5, name: "MacBook Pro 2021", category: "Laptops", price: "$1999.99", description: "Apple's professional-grade laptop for creatives." },
    { id: 6, name: "Canon EOS R5", category: "Cameras", price: "$3899.99", description: "High-resolution mirrorless camera for professional photographers." },
    { id: 7, name: "Bose QuietComfort 45", category: "Headphones", price: "$329.99", description: "Premium noise-canceling headphones for immersive listening experience." },
    { id: 8, name: "Samsung 49-inch Odyssey G9", category: "Monitors", price: "$1499.99", description: "Ultra-wide gaming monitor with high refresh rate." },
    { id: 9, name: "Fitbit Charge 5", category: "Wearable Tech", price: "$179.99", description: "Advanced fitness tracker with built-in GPS and health features." },
    { id: 10, name: "Nintendo Switch OLED", category: "Gaming Consoles", price: "$349.99", description: "Upgraded version of Nintendo Switch with OLED display." },
    {
      id: 11,
      name: "Google Pixel 6 Pro",
      category: "Smartphones",
      price: "$899.99",
      description: "Flagship smartphone with advanced camera capabilities."
    },
    {
      id: 12,
      name: "HP Spectre x360",
      category: "Laptops",
      price: "$1299.99",
      description: "Convertible laptop with sleek design and powerful performance."
    },
    {
      id: 13,
      name: "Microsoft Xbox Series X",
      category: "Gaming Consoles",
      price: "$499.99",
      description: "Next-gen gaming console with high frame rates and fast load times."
    },
    {
      id: 14,
      name: "LG OLED C1",
      category: "TVs",
      price: "$1999.99",
      description: "Premium OLED TV with vibrant colors and deep blacks."
    },
    {
      id: 15,
      name: "GoPro Hero 10 Black",
      category: "Action Cameras",
      price: "$499.99",
      description: "High-performance action camera for capturing adventures."
    },
    {
      id: 16,
      name: "Sony WH-1000XM4",
      category: "Headphones",
      price: "$349.99",
      description: "Top-rated noise-canceling headphones with excellent sound quality."
    },
    {
      id: 17,
      name: "Acer Predator XB273K",
      category: "Monitors",
      price: "$1299.99",
      description: "4K gaming monitor with high refresh rate and G-Sync support."
    },
    {
      id: 18,
      name: "Fitbit Versa 3",
      category: "Wearable Tech",
      price: "$229.99",
      description: "Fitness smartwatch with built-in GPS and heart rate monitoring."
    },
    {
      id: 19,
      name: "Sony PlayStation VR",
      category: "Gaming Accessories",
      price: "$299.99",
      description: "Virtual reality headset for immersive gaming experiences."
    },
    {
      id: 20,
      name: "Apple AirPods Pro",
      category: "Wireless Earbuds",
      price: "$249.99",
      description: "Premium wireless earbuds with active noise cancellation."
    },

    // Add more products as needed
  ]);




  // Function to open product popup
  const openProductPopup = (product) => setSelectedProduct(product);

  // Function to close product popup
  const closeProductPopup = () => setSelectedProduct(null);

  // Function to remove a product
  const removeProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    closeProductPopup(); // Close the product popup after removal
  };

  // Table columns definition
  const columns = [
    {
      Header: 'Product Name',
      accessor: 'name',
    },
    {
      Header: 'Category',
      accessor: 'category',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'Actions',
      Cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={() => openProductPopup(row.original)}>View Product</button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => removeProduct(row.original.id)}>Remove</button>
        </div>
      ),
    },
  ];
    // Filter data based on search query
    const filteredData = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())  ||
    product.price.includes(searchQuery)
  );

  const ViewProductsTable = TableHOC(columns,filteredData, 'p-3', 'View Products', true);

  return (
    <div className='flex'>
      <Sidebar/>
      <div className='flex-1'>
       <div className="flex justify-end items-center p-3">
        <div className="relative">
          <input
            type="text"
            className="border border-gray-300 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaSearch />
          </div>
        </div>
      </div>
      <ViewProductsTable />
   
      {/* Product Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">{selectedProduct.name}</h3>
            <p className="text-gray-600 mb-2">Category: {selectedProduct.category}</p>
            <p className="text-gray-600 mb-2">Price: {selectedProduct.price}</p>
            <p className="text-gray-600 mb-2">{selectedProduct.description}</p>
            <div className="flex justify-end">
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => removeProduct(selectedProduct.id)}>Remove Product</button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-4" onClick={closeProductPopup}>Close</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
    
  );
};

export default ViewProducts;