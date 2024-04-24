import React from 'react';

import './App.css';
import Home from './components/screens/Home';
import Cart from './components/screens/Cart';
import ManageCategories from './components/admin/ManageCategories';
import ManageCustomers from './components/admin/ManageCustomers';
import ManageSellers from './components/admin/ManageSellers';
import ViewProducts from './components/admin/ViewProducts';
import AdminDashboard from './components/admin/AdminDashboard';
import ManageStaff from './components/admin/ManageStaff';
import SellPage from '../src/components/screens/Seller/SellPage'
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='lg:px-10'>
      <CartProvider>
        <Router>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path = "/cart" element ={<Cart/>} />
            <Route path='/admin' element = {<AdminDashboard/>} />
            <Route path="/admin/sellers" element={<ManageSellers/>} />
            <Route path="/admin/staff" element={<ManageStaff/>} />
            <Route path="/admin/categories" element={<ManageCategories/>} />
            <Route path="/admin/customers" element={<ManageCustomers/>} />
            <Route path="/admin/products" element={<ViewProducts/>} />
            <Route path="/sell" element={<SellPage/>} />
          </Routes>
        </Router> 
      </CartProvider>
    </div>
  );
}

export default App;
