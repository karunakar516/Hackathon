import React from 'react'
import logo from "./logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <div className="flex flex-row flex-wrap border border-white bg-slate-900 mx-1 mt-3 h-64">
                <a href="/">
                    <img src={logo} alt="Image" className=" w-40 h-full ml-4 mr-5 py-3" />
                </a>
                <div className=' flex flex-col text-orange-600'>
                    <div className=" flex flex-row py-3 ">
                        <FontAwesomeIcon icon={faInstagram} className="text-orange-600   mr-2" />
                        <FontAwesomeIcon icon={faFacebook} className="text-orange-600  mr-2" />
                        <FontAwesomeIcon icon={faLinkedin} className="text-orange-600  mr-2" />
                        <FontAwesomeIcon icon={faGithub} className="text-orange-600 " />
                    </div>
                    <div className=" py-3">
                        <p>Some text goes here...</p>
                    </div>
                    <div className="">
                        <p>More text...</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
