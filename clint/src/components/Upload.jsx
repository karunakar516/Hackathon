import React, { useState } from 'react'
import axios from 'axios'
const Upload = () => {

    const [video,setVideo] =useState(null)
    const [img,setImg] =useState(null)

    const uploadFile = async (type)=>{
        const data = new FormData();
        data.append('file',type == 'image' ? img : video);
        data.append("upload_preset", type == 'image' ? 'image_preset' : 'video_preset');
 
        try{
            let cloudName = 'dsevum1n3';
            let resouceType = type === 'image' ? 'image' : 'video';
            let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resouceType}/upload`;

            const res = await axios.post(api,data);
            const { secure_url } = res.data;
            console.log(secure_url);
            return secure_url;
        }catch(e){
            console.log(e)
        }
    }

    const handelSubmit = async (e)=>{
        e.preventDefault()
        try{
            const imgurl = await uploadFile('image');
            const videourl = await uploadFile('video');

            // await axios.post('http://localhost:5173/api/videos',{ imgurl , videourl });

            setImg(null);
            setVideo(null);
            console.log("Upload Success");

        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <>
    <div className=" bg-slate-800 m-4 p-4 text-orange-500">
        <form onSubmit={handelSubmit}>
            <div className="">
                <label>
                    Video:
                </label>
                <input 
                type="file"
                accept='video/*'
                id='video'
                onChange={(e)=>setVideo((pree)=>e.target.files[0])}
                />
            </div>
            <div className="">
                <label htmlFor="img">Image:</label>
                <input type="file" accept='image/*' id="img"
                onChange={(e)=>setImg(pree=>e.target.files[0])}
                />
            </div>
            <button type='submit' className=' bg-orange-600 p-2 rounded-md mt-2 text-white'>Upload</button>
        </form>
    </div>
    </>
  )
}

export default Upload
