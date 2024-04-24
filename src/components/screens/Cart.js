import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { RiCloseCircleLine } from 'react-icons/ri';
import Navbar from '../Navbar';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  
  

  const handleQuantityChange = (productId, event) => {
    const newCart = cart?.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: parseInt(event.target.value) };
      }
      return item;
    });
    setCart(newCart);
  };

  const removeItem = (productId) => {
    const updatedCart = cart?.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart?.reduce((total, item) => {
      return total + (item.new_price * item.quantity);
    }, 0);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log('Checkout button clicked');
  };

  return (
    <>
      <Navbar/>
      <div className="cart bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {cart?.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cart?.map((item) => (
                <li key={item.id} className="flex justify-between items-center border-b border-gray-200 py-2">
                  <div className="flex items-center">
                    <img
                      src={item.image} // Assuming item.image contains the URL of the image
                      alt={item.name} // Alt text for accessibility
                      className="w-12 h-12 mr-4 rounded-md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-500">${item.new_price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e)}
                      className="w-12 h-8 text-center border border-gray-300 rounded-md mr-2"
                    />
                    <span className="font-semibold">x</span>
                    <p className="ml-2">${(item.new_price * item.quantity)?.toFixed(2)}</p>
                    <button onClick={() => removeItem(item.id)} className="ml-2 text-red-500">
                      <RiCloseCircleLine />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Total Price: ${getTotalPrice()?.toFixed(2)}</h3>
              <button onClick={handleCheckout} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
