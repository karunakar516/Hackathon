import React from 'react'
import logo from "./logo.png"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handlenav =()=>{
    navigate('/profile')
  }

  return (
    <>
      <nav className=" p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className=" h-12 ml-2" />
      </div>
      <div className="flex items-center">
        <a href="#" className="text-white mr-4">Item 1</a>
        <a href="#" className="text-white mr-4">Item 2</a>
        <a href="#" className="text-white mr-4">Item 3</a>
        <a href="#" className="text-white mr-4">Item 4</a>
        <button className="bg-black text-red-500 py-3 px-4 mb-1 rounded" onClick={handlenav}>Login/Register</button>
      </div>
    </nav>
    </>
  )
}

export default Navbar
