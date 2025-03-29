import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  const navigate = useNavigate();
  const location = useLocation();

  // If navigated from Edit, update user list
  useEffect(() => {
    if (location.state?.updatedUser) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === location.state.updatedUser.id ? location.state.updatedUser : user
        )
      );
    }
  }, [location.state]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users");
        setUsers(response.data.data);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`https://reqres.in/api/users/${id}`);
        setUsers(users.filter(user => user.id !== id));
        alert("User deleted successfully!");
      } catch (err) {
        alert("Failed to delete user");
      }
    }
  };

  const totalPages = Math.ceil(users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentUsers.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-start">
              <div>
                <img src={user.avatar} alt={user.first_name} className="w-16 h-16 rounded-full" />
                <h2 className="text-xl font-semibold">
                  {user.first_name} {user.last_name}
                </h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => navigate(`/edit/${user.id}`, { state: { user } })}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-white rounded ${currentPage === 1 ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
        >
          Prev
        </button>
        <span className="px-4 py-2 bg-gray-200 rounded">Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-white rounded ${currentPage === totalPages ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
