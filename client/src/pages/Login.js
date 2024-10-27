import React, { useState } from "react";
import axios from 'axios';

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
        console.error(error.response.data);  // Log the error response
        setError(error.response.data.detail || 'Login failed');
    }
};

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type='email'
          placeholder="email"
          name='email'
          value={formData.email}
          required
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type='password'
          placeholder="password"
          name='password'
          value={formData.password}
          required
          onChange={handleChange}
        />
        <button type='submit'>Login</button>
        {success && <p style={{color: 'green'}}>{success}</p>}
        {error && <p style={{color: 'red'}}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
