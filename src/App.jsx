import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import EditUser from "./pages/EditUser";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users initially
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users");
        setUsers(response.data.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);

  // ✅ Function to update user in the list
  const handleUserUpdate = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Users users={users} setUsers={setUsers} />} />
      <Route path="/edit/:id" element={<EditUser onUpdateUser={handleUserUpdate} />} />
    </Routes>
  );
}

export default App;
