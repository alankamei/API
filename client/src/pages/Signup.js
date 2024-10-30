import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/signup.css'; 

function Signup() {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

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
            if (error.response) {
                setError(error.response.data.detail || 'Signup failed');
            } else {
                setError('Network error');
            }
        }
    };

    return (
        <div className="container">
            <h2 className="text-center mt-5">Signup</h2>
            <form onSubmit={handleSubmit} className="signup-form mt-4">
                <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input
                        placeholder="username"
                        type="text"
                        required
                        name="username"
                        className="form-control"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        placeholder="email"
                        type="email"
                        required
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input
                        placeholder="password"
                        type="password"
                        required
                        name="password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-teal">Signup</button>
                <p className="mt-3">
                    Already have an account? <Link to='/login'>Login</Link>
                </p>
                {success && <p className="text-success">{success}</p>}
                {error && <p className="text-danger">{error}</p>}
            </form>
        </div>
    );
}

export default Signup;
