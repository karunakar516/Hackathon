import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/auth/register', formData);
            const { token } = response.data;
            localStorage.setItem('token', token);
            console.log('Response:', response.data);
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex flex-col bg-[#e09744] h-screen justify-center items-center">
             <p className='text-white text-3xl font-serif'>Registration Page</p>
            <div className="bg-white m-3 p-8 flex flex-col">
                <form onSubmit={handleSubmit}>
                    <div className=' mb-2'>
                        <label className=' mr-10'>Name:</label>
                        <input
                         className=' bg-orange-400 shadow-orange-800 shadow-md rounded-xl p-2'
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className=' mb-2'>
                        <label  className=' mr-10'>Email:</label>
                        <input
                         className=' bg-orange-400 shadow-orange-800 shadow-md rounded-xl p-2'
                            type='email'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className=' mb-3'>
                        <label  className=' mr-2'>Username:</label>
                        <input
                         className=' bg-orange-400 shadow-orange-800 shadow-md rounded-xl p-2'
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className=' mb-2'>
                        <label  className=' mr-4'>Password:</label>
                        <input
                         className=' bg-orange-400 shadow-orange-800 shadow-md rounded-xl p-2'
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='mt-5'>
                        <button type='submit' className=' bg-orange-400 p-2 ml-28 rounded-lg' >Submit</button>
                    </div>
                </form>
                <div className=' mt-4'>
                    <button  className=' bg-orange-400 p-2 ml-28 rounded-lg ' onClick={() => navigate('/login')}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;
