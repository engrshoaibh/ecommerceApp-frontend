import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductModal from './AddPoductModal';
import Toast from './Toast';


function SellPage() {
    const [showModal, setShowModal] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
  
    const toggleModal = () => {
      setShowModal(!showModal);
    };
  
    const handleAddProduct = (product) => {
      // Implement add product functionality here
      setToastMessage('Product added successfully!');
      toggleModal();
    };
  
    return (
    
        <div className="min-h-screen bg-gray-100">
         
              <ProductList onAddProduct={toggleModal} /> {/* Pass toggleModal function */}
           
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <AddProductModal onAddProduct={handleAddProduct} onCloseModal={toggleModal} />
            </div>
          )}
          {toastMessage && <Toast message={toastMessage} onCloseToast={() => setToastMessage('')} />}
        </div>
  
    );
}

export default SellPage;
