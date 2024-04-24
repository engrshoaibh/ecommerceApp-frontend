import React, { useState } from 'react';
import Sidebar from './Sidebar';

// Subcategory card component
const SubcategoryCard = ({ id, name, image, description, onDelete }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 transition duration-300 ease-in-out transform hover:shadow-lg hover:bg-gray-50">
      <img src={image} alt={name} className="w-full mb-2" />
      <div className="font-bold mb-2">{name}</div>
      <div className="text-gray-700 mb-2">{description}</div>
      <button
        onClick={() => onDelete(id)}
        className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

// Category component
const Category = ({ id, category, onSubcategoryAdd, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subcategoryName, setSubcategoryName] = useState('');
  const [subcategoryDescription, setSubcategoryDescription] = useState('');
  const [subcategories, setSubcategories] = useState(category.subcategories);

  const handleSubcategoryAdd = () => {
    if (subcategoryName.trim() !== '' && subcategoryDescription.trim() !== '') {
      const newSubcategory = {
        id: subcategories.length + 1,
        name: subcategoryName,
        description: subcategoryDescription
      };
      const newSubcategories = [...subcategories, newSubcategory];
      setSubcategories(newSubcategories);
      onSubcategoryAdd(category.id, newSubcategories);
      setSubcategoryName('');
      setSubcategoryDescription('');
      setIsModalOpen(false);
    }
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleSubcategoryDelete = subcategoryId => {
    const updatedSubcategories = subcategories.filter(subcategory => subcategory.id !== subcategoryId);
    setSubcategories(updatedSubcategories);
    onSubcategoryAdd(id, updatedSubcategories);
  };

  return (
    
      
    
        <div className="my-4">
          <div className="flex justify-between items-center border-b py-2">
            <span className="text-xl text-center font-bold">{category.name}</span>
            <div>
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-sm px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
              >
                {expanded ? '-' : '+'}
              </button>
              <button onClick={handleDelete} className="ml-2 px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
          {expanded && (
            <div>
              <div className="mt-2 mb-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                >
                  Add Subcategory
                </button>
                {isModalOpen && (
                  <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg">
                      <h2 className="text-xl font-bold mb-4">Add Subcategory</h2>
                      <input
                        type="text"
                        value={subcategoryName}
                        onChange={e => setSubcategoryName(e.target.value)}
                        placeholder="Enter subcategory name"
                        className="border rounded p-2 mb-4 w-full"
                      />
                      <input
                        type="text"
                        value={subcategoryDescription}
                        onChange={e => setSubcategoryDescription(e.target.value)}
                        placeholder="Enter subcategory description"
                        className="border rounded p-2 mb-4 w-full"
                      />
                      <div className="flex justify-end">
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 mr-2"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSubcategoryAdd}
                          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {subcategories.map(subcategory => (
                  <SubcategoryCard key={subcategory.id} {...subcategory} onDelete={handleSubcategoryDelete} />
                ))}
              </div>
            </div>
          )}
        </div>
      
  
  );
};

// Main component
const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const handleSubcategoryAdd = (categoryId, newSubcategories) => {
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        return { ...category, subcategories: newSubcategories };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const handleCategoryAdd = () => {
    const categoryName = prompt('Enter category name:');
    if (categoryName) {
      const newCategory = {
        id: categories.length + 1,
        name: categoryName,
        subcategories: []
      };
      setCategories([...categories, newCategory]);
    }
  };

  const handleDelete = categoryId => {
    const updatedCategories = categories.filter(category => category.id !== categoryId);
    setCategories(updatedCategories);
  };

  return (

  
      <div className='flex'>
        <Sidebar />
        <div>
        <div className="m-5 text-2xl text-center font-bold">Product Categories</div>
        <div className="container mx-auto mt-8 px-4">
          <button
            onClick={handleCategoryAdd}
            className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 mb-4"
          >
            Add Category
          </button>
          {categories.map(category => (
            <Category
              key={category.id}
              id={category.id}
              category={category}
              onSubcategoryAdd={handleSubcategoryAdd}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      </div>
   
  );
};

export default ManageCategories;





