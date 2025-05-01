// Login.js
import React, { useState } from "react";
import "./Auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
 const navigate = useNavigate(); // Initialize navigation
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5002/auth/login", form);
      alert("Login successful! Welcome " + res.data.auth.name);
      navigate("/"); // Navigate to login page
    } catch (err) {
      alert(err.response?.data?.message || "Error during login");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;