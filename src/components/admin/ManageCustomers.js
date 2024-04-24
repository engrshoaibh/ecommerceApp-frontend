import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import TableHOC from './table/TableHOC';
import Sidebar from './Sidebar';

const ManageCustomers = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const columns = [
    {
      Header: 'Customer Name',
      accessor: 'name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Actions',
      Cell: () => (
        <>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Approve</button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Terminate</button>
        </>
      ),
    },
  ];

  // Sample customer data
  const data = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    // Add more customer objects here
  ];

  // Filter data based on search query
  const filteredData = data.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ManageCustomersTable = TableHOC(columns, filteredData, 'p-6', 'Manage Customers', true);

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1'>
        <div className="flex justify-end items-center p-6">
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
        <ManageCustomersTable />
      </div>
    </div>
  );
};

export default ManageCustomers;
