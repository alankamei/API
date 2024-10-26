import React, { useState } from "react";

function Login() {

    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:""
    })

    const handleChange = (event) =>{
        const {value,name} = event.target
        setFormData((...prevData) =>({
            ...prevData, [name]:value,
        }))
    } 

    const handleSubmit = (event) =>{
        event.preventDefault();
        setFormData({
            username:"",
            email:"",
            password:""
        })
    }
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type='text' placeholder="username" name='username' value={formData.username} required onChange={handleChange}/>
        <label>Email</label>
        <input type='email' placeholder="email" name='email' value={formData.email} required onChange={handleChange}/>
        <label>Password</label>
        <input type='password' placeholder="password" name='password' value={formData.password} required onChange={handleChange}/>
      </form>
    </div>
  );
}

export default Login;
