import React from 'react'
import logo from "./logo2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <div className="bg-orange-400 flex flex-row  mt-3 h-64">
                <a href="/">
                    <img src={logo} alt="Image" className=" w-48 h-full ml-4 mr-5 py-3" />
                </a>
                <div className=' flex flex-col text-white'>
                    <div className=" flex flex-row py-3 ">
                        <FontAwesomeIcon icon={faInstagram} className="text-white mr-2" />
                        <FontAwesomeIcon icon={faFacebook} className="text-white mr-2" />
                        <FontAwesomeIcon icon={faLinkedin} className="text-white mr-2" />
                        <FontAwesomeIcon icon={faGithub} className="text-white " />
                    </div>
                    <div className=" py-3">
                        <p>Some text goes here...</p>
                    </div>
                    <div className="">
                        <p>More text...</p>
                    </div>
                </div>
                <br />
                <br /><br /><br />
            </div>
        </>
    )
}

export default Footer
