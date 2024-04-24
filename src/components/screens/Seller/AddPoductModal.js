// AddProductModal.js
import React, { useState } from 'react';
import { RiAddCircleLine, RiDeleteBinLine } from 'react-icons/ri'; // Import icons

const AddProductModal = ({ onCloseModal }) => {
  // State variables to track product details
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImages, setProductImages] = useState(['']);
  const [productDescription, setProductDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  // Function to handle adding a new image field
  const handleAddImageField = () => {
    if (productImages.length < 3) {
      setProductImages([...productImages, '']);
    }
  };

  // Function to handle removing an image field
  const handleRemoveImageField = (index) => {
    const updatedImages = [...productImages];
    updatedImages.splice(index, 1);
    setProductImages(updatedImages);
  };

  // Function to handle editing an image URL
  const handleEditImage = (index, value) => {
    const updatedImages = [...productImages];
    updatedImages[index] = value;
    setProductImages(updatedImages);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to add the product with the entered details
    const newProduct = {
      name: productName,
      price: productPrice,
      images: productImages,
      description: productDescription,
      category: selectedCategory,
      subcategory: selectedSubcategory
    };
    console.log('New product:', newProduct);
    onCloseModal(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 w-96">
        <h2 className="text-lg font-semibold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="productName" className="block mb-1">
              Product Name:
            </label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productPrice" className="block mb-1">
              Price:
            </label>
            <input
              type="number"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productImages" className="block mb-1">
              Images:
            </label>
            {productImages.map((imageUrl, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => handleEditImage(index, e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 mr-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {productImages.length > 1 && (
                  <RiDeleteBinLine
                    onClick={() => handleRemoveImageField(index)}
                    className="text-red-500 cursor-pointer"
                  />
                )}
              </div>
            ))}
            {productImages.length < 3 && (
              <button
                type="button"
                onClick={handleAddImageField}
                className="text-blue-500 hover:text-blue-700 flex items-center"
              >
                <RiAddCircleLine className="mr-1" /> Add Image
              </button>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="productDescription" className="block mb-1">
              Description:
            </label>
            <textarea
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full h-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block mb-1">
              Category:
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              {/* Render categories dynamically */}
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="subcategory" className="block mb-1">
              Subcategory:
            </label>
            <select
              id="subcategory"
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Subcategory</option>
              {/* Render subcategories dynamically based on selected category */}
              {selectedCategory === 'category1' && (
                <>
                  <option value="subcat1">Subcategory 1</option>
                  <option value="subcat2">Subcategory 2</option>
                </>
              )}
              {selectedCategory === 'category2' && (
                <>
                  <option value="subcat3">Subcategory 3</option>
                  <option value="subcat4">Subcategory 4</option>
                </>
              )}
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Product
            </button>
            <button
              onClick={onCloseModal}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
