import React from 'react'
import logo from './logo.png'

const Content = () => {
    return (
        <>
            <div className="flex flex-col flex-wrap mt-8 mx-8">
                <div className="border border-white w-full p-4 mb-3">
                    <p className=' text-orange-600'>HI This is pukaaaa</p>
                </div>
                <div className="flex flex-row flex-wrap border border-white w-full h-52 p-4 mb-3">
                    <a href="/profile">
                        <img src={logo} alt="Image" className=" w-40 h-full ml-4 mr-10" />
                    </a>
                    <div className=' flex flex-col text-orange-600'>
                        <div className="">
                        <p>Some text goes here...</p>
                        </div>
                        <div className="">
                        <p>More text...</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap border border-white w-full h-52 p-4 mb-3">
                    <a href="/profile">
                        <img src={logo} alt="Image" className=" w-40 h-full ml-4 mr-10" />
                    </a>
                    <div className=' flex flex-col text-orange-600'>
                        <div className="">
                        <p>Some text goes here...</p>
                        </div>
                        <div className="">
                        <p>More text...</p>profile
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap border border-white w-full h-52 p-4 mb-3">
                    <a href="/profile">
                        <img src={logo} alt="Image" className=" w-40 h-full ml-4 mr-10" />
                    </a>
                    <div className=' flex flex-col text-orange-600'>
                        <div className="">
                        <p>Some text goes here...</p>
                        </div>
                        <div className="">
                        <p>More text...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
