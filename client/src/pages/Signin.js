import React, { useState } from 'react'

function Signin() {

const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:""
})  

const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevData)=>({
        ...prevData, [name]:value,
    }))
    
}

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
        username:'',
        email:'',
        password:'',
    })
}

  return (
    <div>
        <h2>Signin Page</h2>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input placeholder='username' type='text' required name='username' value={formData.username} onChange={handleChange} />
            <label>Email:</label>
            <input placeholder='email' type='email' required name='email' value={formData.email} onChange={handleChange} />
            <label>Password:</label>
            <input placeholder='password' type='password' required name='password'value={formData.password} onChange={handleChange} />
            <button type='submit'>Signin</button>
            <p>Don't have an account? <a href='#'>Signup</a></p>
        </form>
    </div>
  )
}

export default Signin