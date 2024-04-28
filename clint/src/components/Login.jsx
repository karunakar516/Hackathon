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
        <div className="flex flex-col bg-[#e09744] h-screen justify-center items-center">
            <p className='text-white text-3xl font-serif'>Login Page</p>
            <div className="bg-white m-3 p-10 flex flex-col">
                <form onSubmit={handleSubmit}>
                    <div className=" mb-4">
                        <label className='  mr-2'>UserName:</label>
                        <input
                        className=' bg-orange-400 shadow-orange-800 shadow-md rounded-xl p-2'
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="">
                        <label className='mr-3'>Password:</label>
                        <input
                         className=' bg-orange-400 shadow-orange-800 shadow-md rounded-xl p-2'
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className=" mt-5">
                        <button type='submit' className=' bg-orange-400 p-2 ml-28 rounded-lg' >Submit</button>
                    </div>
                </form>
                <div className="mt-4">
                    <button className=' bg-orange-400 p-2 ml-24 rounded-lg ' onClick={() => navigate('/register')}>Registration</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
