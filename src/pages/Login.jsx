import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("https://reqres.in/api/login", { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/users");
    } catch (err) {
      setError("Invalid credentials. Try again");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border p-2 w-full mb-4" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="border p-2 w-full mb-4" />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full hover:bg-blue-600 hover:cursor-pointer">Login</button>
      </form>
    </div>
  );
};

export default Login;
