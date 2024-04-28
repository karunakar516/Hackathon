import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:8000/api/auth/login', formData, {
                headers: {
                    'Authorization': `Bearer ${token}` // Replace 'token' with your actual token variable
                }
            });
            console.log('Response:', response.data);
            navigate('/home');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="flex flex-col bg-[#e09744]">
            <div className="bg-slate-200 m-3 p-5">
                <form onSubmit={handleSubmit}>
                    <label>UserName:</label>
                    <input 
                        type="text" 
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <label>Password:</label>
                    <input 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit'>Submit</button>
                </form>
                <button onClick={() => navigate('/register')}>Registration</button>
            </div>
        </div>
    );
};

export default Login;
