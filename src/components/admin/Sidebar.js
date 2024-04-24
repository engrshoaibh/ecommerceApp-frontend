import React from 'react';
import { Link } from 'react-router-dom';
import { BsPeople, BsGrid, BsPersonCheck, BsShop, BsPerson } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen flex flex-col">
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <div className="flex-1">
        <ul className="flex flex-col space-y-2">
          <li>
            <Link to="/admin/sellers" className="hover:bg-gray-700 block p-4 flex items-center">
              <BsPeople className="mr-2" /> Sellers
            </Link>
          </li>
          <li>
            <Link to="/admin/categories" className="hover:bg-gray-700 block p-4 flex items-center">
              <BsGrid className="mr-2" /> Categories
            </Link>
          </li>
          <li>
            <Link to="/admin/customers" className="hover:bg-gray-700 block p-4 flex items-center">
              <BsPersonCheck className="mr-2" /> Customers
            </Link>
          </li>
          <li>
            <Link to="/admin/products" className="hover:bg-gray-700 block p-4 flex items-center">
              <BsShop className="mr-2" /> Products
            </Link>
          </li>
          <li>
            <Link to="/admin/staff" className="hover:bg-gray-700 block p-4 flex items-center">
              <BsPerson className="mr-2" /> Staff
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
