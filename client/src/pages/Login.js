import React, { useState } from "react";
import axios from 'axios';
import '../styles/login.css'; // Import your custom CSS file
import { Link } from "react-router-dom";

function Login() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login/', formData);
      setSuccess(response.data.message);
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error(error.response.data); // Log the error response
      setError(error.response.data.detail || 'Login failed');
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Login Page</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type='email'
            className='form-control'
            placeholder="Enter your email"
            name='email'
            value={formData.email}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type='password'
            className='form-control'
            placeholder="Enter your password"
            name='password'
            value={formData.password}
            required
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-teal'>Login</button>
        <p>Don't have an account? <Link to='/signin'>Signup</Link></p>
        {success && <p className="text-success">{success}</p>}
        {error && <p className="text-danger">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
