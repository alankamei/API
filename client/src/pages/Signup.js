  import React, { useState } from "react";
  import axios from "axios";
  import { Link } from "react-router-dom";
  function Signup() {
      const [error,setError] = useState(null)
      const [success, setSuccess] = useState(null)

      const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const response = await axios.post(
          "http://localhost:8000/api/signup/",
          formData
        );
        setSuccess("Signup successful!");
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      } catch (error) {
          if(error.response){
              setError(error.response.data.detail || 'Signup failed')
          } else {
              setError('Network error')
          }
      }
    };

    return (
      <div>
        <h2>Signup Page</h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            placeholder="username"
            type="text"
            required
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input
            placeholder="email"
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            placeholder="password"
            type="password"
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Signup</button>
          <p>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
          {success && <p style={{color:'green'}}>{success}</p>}
          {error && <p style={{color:'red'}}>{error}</p>}
        </form>
      </div>
    );
  }

  export default Signup;
