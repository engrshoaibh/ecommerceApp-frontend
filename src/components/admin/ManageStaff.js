import React from 'react';
import Sidebar from './Sidebar';

const ManageStaff = () => {
  return (
    <div className='flex'>
    <Sidebar/>
    <div className="p-6 w-full" >
      <h2 className="text-3xl font-bold mb-4">Manage Staff</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">List of Staff Members</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap">Admin</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Edit</button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Remove</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                <td className="px-6 py-4 whitespace-nowrap">Staff</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Edit</button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Remove</button>
                </td>
              </tr>
              {/* More staff members can be added here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ManageStaff;
