import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(location.state?.user || { first_name: "", last_name: "", email: "" });
  const [loading, setLoading] = useState(!location.state?.user);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!location.state?.user) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`https://reqres.in/api/users/${id}`);
          setUser(response.data.data);
        } catch (err) {
          setError("Failed to fetch user details");
        } finally {
          setLoading(false);
        }
      };
      fetchUser();
    }
  }, [id, location.state?.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://reqres.in/api/users/${id}`, user);

      // Simulating update (Reqres API does not persist changes)
      const updatedUser = { ...user, id: Number(id) };
      navigate("/users", { state: { updatedUser } });

      alert("User updated successfully!");
    } catch (err) {
      setError("Failed to update user");
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              value={user.first_name}
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              value={user.last_name}
              onChange={(e) => setUser({ ...user, last_name: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="flex justify-between">
            <button onClick={() => navigate("/users")}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
              Cancel
            </button>
            <button type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
