import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import TableHOC from './table/TableHOC';
import Sidebar from './Sidebar';

const ManageSellers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const columns = [
    {
      Header: 'Seller Name',
      accessor: 'name',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Actions',
      Cell: () => (
        <>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2" onClick={() => handleEditClick("Seller 1", "Approved")}>Edit</button>

        </>
      ),
    },
  ];


  // State to track whether the popup is open or not
  const [popupOpen, setPopupOpen] = useState(false);
  // State to track seller details in the popup
  const [sellerDetails, setSellerDetails] = useState({ name: "", status: "" });


  const handleEditClick = (name, status) => {
    setSellerDetails({ name, status });
    setPopupOpen(true);
  };

  // Function to handle closing the popup
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  // Function to handle approving the seller
  const handleApproveSeller = () => {
    // Logic to approve the seller
    setSellerDetails({ ...sellerDetails, status: "Approved" });
  };

  // Function to handle terminating the seller
  const handleTerminateSeller = () => {
    // Logic to terminate the seller
    setSellerDetails({ ...sellerDetails, status: "Terminate" });

  };
  // Sample customer data
  const data = [
    { name: 'John Doe', status: 'Approved' },
    { name: 'Shoaib Hassan', status: 'Pending' },

  ];

  // Filter data based on search query
  const filteredData = data.filter((seller) =>
    seller.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    seller.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const SellersTable = TableHOC(columns, filteredData, 'p-6', 'Sellers Account', true);

  return (
    <div className='flex'>
      <Sidebar />
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
        <SellersTable />


        {/* Seller Popup */}
        {popupOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                {/* Seller Popup Content */}
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Seller Details</h3>
                  <p><strong>Name:</strong> {sellerDetails.name}</p>
                  <p><strong>Status:</strong> {sellerDetails.status}</p>
                  {sellerDetails.status === "Pending" && (
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2" onClick={handleApproveSeller}>Approve</button>
                  )}
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={handleTerminateSeller}>Terminate</button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-2" onClick={handleClosePopup}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  );
};

export default ManageSellers;
