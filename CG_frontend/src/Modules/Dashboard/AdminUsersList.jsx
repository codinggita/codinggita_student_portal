import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Search,
  Plus,
  Filter,
  MoreVertical,
  Edit,
  Trash,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

const AdminUsersList = () => {




  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [roleFilter, setRoleFilter] = useState('');
  const usersPerPage = 10;

  const fetchAllGroups = async () => {
    try {
      // Make a GET request to the backend API endpoint
      const response = await axios.get('http://localhost:8080/auth/user', {
        // headers: {
        //     Authorization: `Bearer ${localStorage.getItem('token')}`,
        // },
      });

      // Check if the response is successful
      if (response.status === 200) {
        // Return the fetched groups
        return response.data.Users;
      } else {
        // Handle unexpected response status
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      // Handle errors
      console.error("Error fetching Users:", error);
      throw error; // Re-throw the error for further handling
    }
  };


  useEffect(() => {
    const loadGroups = async () => {
      try {
        const data = await fetchAllGroups();
        console.log(data)
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadGroups();
  }, []);

  if (loading) {
    return <div>Loading groups...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

 

  // Get unique roles from users data
  const roles = [...new Set(users.map(user => user.role))];

  // Filter users based on search term and role filter
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === '' || user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  // Calculate pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Handle checkbox selection
  const toggleSelectUser = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedUsers.length === currentUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(currentUsers.map(user => user.id));
    }
  };

  // Reset filters
  const resetFilters = () => {
    setRoleFilter('');
    setShowFilterPopup(false);
  };

  // Applied filter badge
  const FilterBadge = ({ label, onRemove }) => (
    <span className="inline-flex items-center px-2 py-1 mr-2 text-xs font-medium rounded-md bg-blue-100 text-blue-800">
      {label}
      <button onClick={onRemove} className="ml-1 text-blue-600 hover:text-blue-800">
        <X size={14} />
      </button>
    </span>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 w-screen" >
      {/* Header and search bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">Users Management</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <div className="relative">
            <button
              className="flex items-center gap-1 p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              onClick={() => setShowFilterPopup(!showFilterPopup)}
            >
              <Filter size={18} />
              <span className="hidden md:inline">Filter</span>
            </button>

            {/* Filter popup */}
            {showFilterPopup && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-10 border border-gray-200">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-700">Filter Users</h3>
                  <button onClick={() => setShowFilterPopup(false)} className="text-gray-400 hover:text-gray-500">
                    <X size={16} />
                  </button>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                  >
                    <option value="">All Roles</option>
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={resetFilters}
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setShowFilterPopup(false)}
                    className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
          <button className="flex items-center gap-1 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={18} />
            <span className="hidden md:inline">Add User</span>
          </button>
        </div>
      </div>

      {/* Active filters */}
      {roleFilter && (
        <div className="mb-4">
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">Filters:</span>
            <FilterBadge
              label={`Role: ${roleFilter}`}
              onRemove={() => setRoleFilter('')}
            />
            {(roleFilter) && (
              <button
                onClick={resetFilters}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                  checked={selectedUsers.length === currentUsers.length && currentUsers.length > 0}
                  onChange={toggleSelectAll}
                />
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentUsers.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => toggleSelectUser(user.id)}
                  />
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{user.name}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.email}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.role}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="p-1 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-50">
                      <Edit size={16} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-red-600 rounded-full hover:bg-red-50">
                      <Trash size={16} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {filteredUsers.length > 0 ? (
        <div className="flex items-center justify-between mt-4 px-4 py-3 bg-gray-50 border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{indexOfFirstUser + 1}</span> to{" "}
                <span className="font-medium">
                  {Math.min(indexOfLastUser, filteredUsers.length)}
                </span>{" "}
                of <span className="font-medium">{filteredUsers.length}</span> users
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  <ChevronLeft size={16} />
                </button>
                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${page === currentPage
                      ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                      }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  <ChevronRight size={16} />
                </button>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">No users found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default AdminUsersList;