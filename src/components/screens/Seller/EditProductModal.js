// EditProductModal.js
import React, { useState } from 'react';
import { RiAddCircleLine, RiDeleteBinLine } from 'react-icons/ri'; // Import icons

const EditProductModal = ({ product, onCloseModal }) => {
  // State variables to track edited product details
  const [editedName, setEditedName] = useState(product.name);
  const [editedPrice, setEditedPrice] = useState(product.price);
  const [editedImages, setEditedImages] = useState(product.images);
  const [editedDescription, setEditedDescription] = useState(product.description);

  // Function to handle adding a new image field
  const handleAddImageField = () => {
    setEditedImages([...editedImages, '']);
  };

  // Function to handle removing an image field
  const handleRemoveImageField = (index) => {
    const updatedImages = [...editedImages];
    updatedImages.splice(index, 1);
    setEditedImages(updatedImages);
  };

  // Function to handle editing an image URL
  const handleEditImage = (index, value) => {
    const updatedImages = [...editedImages];
    updatedImages[index] = value;
    setEditedImages(updatedImages);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to update the product with edited details
    const editedProduct = {
      ...product,
      name: editedName,
      price: editedPrice,
      images: editedImages,
      description: editedDescription
    };
    console.log('Product updated:', editedProduct);
    onCloseModal(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 w-96">
        <h2 className="text-lg font-semibold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="editedName" className="block mb-1">
              Product Name:
            </label>
            <input
              type="text"
              id="editedName"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="editedPrice" className="block mb-1">
              Price:
            </label>
            <input
              type="number"
              id="editedPrice"
              value={editedPrice}
              onChange={(e) => setEditedPrice(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="editedImages" className="block mb-1">
              Images:
            </label>
            {editedImages.map((imageUrl, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => handleEditImage(index, e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 mr-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {editedImages.length > 1 && (
                  <RiDeleteBinLine
                    onClick={() => handleRemoveImageField(index)}
                    className="text-red-500 cursor-pointer"
                  />
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddImageField}
              className="text-blue-500 hover:text-blue-700 flex items-center"
            >
              <RiAddCircleLine className="mr-1" /> Add Image
            </button>
          </div>
          <div className="mb-4">
            <label htmlFor="editedDescription" className="block mb-1">
              Description:
            </label>
            <textarea
              id="editedDescription"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full h-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save Changes
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

export default EditProductModal;
