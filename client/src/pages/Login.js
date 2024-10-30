import React, { useState } from "react";
import axios from 'axios';
import '../styles/login.css'; // Import your custom CSS file
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";



function Login() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const {login} = useUser();
const navigate = useNavigate();

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
      
      // Access the username from the user object
      if (response.data.user && response.data.user.username) {
        localStorage.setItem('username', response.data.user.username); // Store username
        login(response.data.user.username);
        console.log('Storing username:', response.data.user.username); // Log the stored username
      } else {
        console.error('Username not found in response:', response.data);
      }
  
      setFormData({ email: "", password: "" });
      navigate('/');
    } catch (error) {
      console.error(error);
      if (error.response) {
        setError(error.response.data.detail || 'Login failed');
      } else {
        setError('Network error or server not reachable');
      }
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
