import React from 'react'
import logo1 from "./logo1.png" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaArrowLeft, FaEnvelope, FaLinkedinIn, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import Tweets from './Tweets';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

   const navigate = useNavigate()
   const handlenav = () =>{
    navigate('/')
   }

    return (
        <>
            <div className="flex flex-row flex-wrap bg-gradient-to-r from-blue-600 via-blue-200 to-slate-100 m-5">
                <div className="flex flex-col flex-wrap py-4 px-4 w-0.5/3 h-full pr-36">
                    <div className="">
                        <img src={logo1} alt="Image" className=" w-52 h-52 ml-28 mt-10" />
                    </div>
                    <div className="">
                        <p className=' text-slate-100 mt-10 ml-48 text-2xl'>User</p>
                    </div>
                    <div className=" flex flex-row flex-wrap ml-28 mt-10 mb-5 gap-8">
                        <FontAwesomeIcon icon={faInstagram} className="text-slate-100 text-3xl" />
                        <FontAwesomeIcon icon={faFacebook} className="text-slate-100 text-3xl" />
                        <FontAwesomeIcon icon={faLinkedin} className="text-slate-100 text-3xl" />
                        <FontAwesomeIcon icon={faGithub} className="text-slate-100 text-3xl" />
                    </div>
                    <div className="flex flex-row flex-wrap justify-center ml-24 mt-6">
                        <div className=" text-slate-100 mt-2 mr-1">
                            <FaEnvelope />
                        </div>
                        <div className=" text-slate-100 text-xl">
                            <p>Gmail</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center ml-28 mt-4">
                        <div className=" text-slate-100 mt-2 mr-1">
                            <FaPhoneAlt />
                        </div>
                        <div className=" text-slate-100 text-xl">
                            <p>Number</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center ml-28 mt-4">
                        <div className=" text-slate-100 mt-2 mr-1">
                            <FaLinkedinIn />
                        </div>
                        <div className=" text-slate-100 text-xl">
                            <p>LinkedIn</p>
                        </div>
                    </div>
                    <br /><br /><br />
                </div>
                <div className=" flex flex-col">
                    <div className=" flex flex-row text-black text-xl mt-2">
                        <FaArrowLeft className='text-black text-xl ml-3 mt-2' onClick={handlenav} />
                        <p className=' ml-2 mt-0.5'>Tweets</p>
                    </div>
                    <div className="">
                        <p className=' text-black mt-4 text-center mr-5 text-2xl'>History</p>
                    </div>
                    <div className="text-black overflow-y-auto mt-3" style={{ maxHeight: '550px' }}>
                        {
                            Tweets.map((data, index) => (
                                <div className="flex flex-col flex-wrap bg-white gap-3 mx-44 mt-2 mb-2 p-5 rounded-xl  shadow-blue-300 shadow-sm" key={index}>
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
        </>
    )
}

export default Profile
