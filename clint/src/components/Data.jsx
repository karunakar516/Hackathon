import React from 'react'
import { FaAngleDown, FaArrowDown, FaPortrait, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import logo1 from './logo2.jpg'
import Tweets from './Tweets'

const Data = () => {

    const navigate = useNavigate()
    const handlenav = () => {
        navigate('/profile')
    }


    return (
        <>
            <div className=" flex flex-row flex-wrap bg-[#e09744] h-screen">
                <div className=" w-1/5 border border-black h-full">
                    <div className="flex flex-col flex-wrap py-4 px-4 h-full pr-10">
                        <div className="">
                            <img src={logo1} alt="Image" className=" w-36 h-36 ml-14 mt-4" />
                        </div>
                        <div className=" ml-2">
                            <p className=' text-slate-100 mt-6 ml-16 text-xl'>Search Tutor</p>
                        </div>
                        <div className=" ml-2">
                            <p className=' text-slate-100 mt-6 ml-3 text-xl'>Search Finantial Support</p>
                        </div>
                        <div className=" ml-2">
                            <p className=' text-slate-100 mt-6 ml-14 text-xl'>Create Content</p>
                        </div>
                        <div className="">
                        <div className="ml-2">
                            <p className=' text-slate-100 text-xl mt-56 ml-14 '>Find Content</p>
                        </div>
                        <div className=" ml-2">
                            <p className='text-slate-100 text-xl mt-3 ml-12 '>Create Content</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className=" w-4/5  border border-black h-full">
                    <div className="flex flex-col flex-wrap">
                        <div className=" flex flex-row justify-between">
                            <div className=" text-white text-2xl ml-7 mt-3">Home</div>
                            <div className=" flex flex-row"><FaUser className=' text-orange-500 text-4xl rounded-lg mt-3 mr-1 bg-slate-200 p-2' onClick={handlenav} /><FaAngleDown className='text-white text-2xl mt-4 mr-4' onClick={handlenav} /></div>
                        </div>
                    </div>
                    <div className="">
                        <p className=' text-white text-center text-2xl'>Feed</p>
                    <div className="text-black overflow-y-auto mt-3" style={{ maxHeight: '550px' }}>
                        {
                            Tweets.map((data, index) => (
                                <div className="flex flex-col flex-wrap bg-white shadow-orange-600 shadow-lg  gap-3 mx-44 mt-2 mb-5 p-5 rounded-xl" key={index}>
                                    <div className="text-black">
                                        <p>{data.name}</p>
                                    </div>
                                    <div className="text-black">
                                        <p>{data.message}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Data
