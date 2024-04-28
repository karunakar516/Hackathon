import React from 'react'
import logo from "./logo2.jpg"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handlenav =()=>{
    navigate('/login')
  }

  return (
    <>
      <nav className=" p-4 flex justify-between items-center bg-orange-400">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 ml-8" />
      </div>
      <div className="flex items-center">
        <a href="#" className=" text-white text-xl mb-1.5 mr-4">Home</a>
        <a href="#" className="text-white text-xl mb-1.5 mr-4">About</a>
        <a href="#" className="text-white text-xl mb-1.5 mr-4">Contact</a>
        <button className="bg-white hover:bg-orange-300 text-[#e1a556] hover:text-white shadow-orange-300 shadow-md hover:shadow-slate-100 hover:shadow-md py-3 px-4 mb-1 rounded" onClick={handlenav}>Login/Register</button>
      </div>
    </nav>
    </>
  )
}

export default Navbar
