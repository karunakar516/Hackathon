const {generateTOken}=require('../Middlewares/auth.middleware')
const {Post}=require("../Models/post.model") 
const {person}=require('./../Models/auth.model')


const signUp= async(req,res)=>{
    try{
        const data=req.body;
        const newperson=new person(data);
        const response=await newperson.save()
        console.log("data saved")
        const payload={ 
            id: response.id,
            username: response.username
        }
        console.log(JSON.stringify(payload))
        const token=generateTOken(payload)
        console.log("token is",token)
        res.status(200).json({response:response,token:token});
    }
    catch(err){
        console.log("error")
        res.status(500).json({error:'internal error'});
    }
}

const login=async (req,res)=>{
    try{
        // extract username and password from the request body
        const {username,password}=req.body
        // finding whether user exist or not
        const user=await person.findOne({username:username})
        // if user does not exist or password does not match return error
        if(!user || !await(user.comparePassword(password))){
            return res.status(401).json({error:'invalid username or password'})
        }

        // generating token
        const payload={
            id:user.id,
            username:user.username
        }
        const token=generateTOken(payload)
        // returnong token
        res.json({token})
    }
    catch(err){
        console.error(err)
        res.status(500).json({error:"internal server error"})
    }
}

const selfProfile= async(req,res)=>{
    try{
        const userData=req.user
        console.log("user data :",userData)
        const userid=userData.id
        const user=await person.findById(userid)
        res.status(200).json(user)
    }
    catch(err){
        console.error(err)
        res.status(500).json({error:"internal server error"})
    }
}

const profileById= async (req,res)=>{
    try{
        const {id}=req.params 
        const user=await person.findById(id)
        res.status(200).json(user)
    }
    catch(err){
        console.error(err)
        res.status(500).json({error:"internal server error"})
    }
}

const profile=async(req,res)=>{
    try{
        const {username} =req.params;
        console.log(username)
        const user_obj=await person.findOne({username:username})
        if (!user_obj){
            res.status(404).json({"error message":"not found"})
        }
        res.status(201).json({"msg":"updated sucessfully"});
    }
    catch(error){
        res.status(500).json(error.json)
    }
}

const profileUpdate=async (req,res)=>{
    try{
        const id=req.user.id
        const updatepersondata=req.body
        const response=await person.findByIdAndUpdate(id,updatepersondata)
        if(!response){
            res.status(404).json({error:"person not found"})
        }
        console.log("data updated")
        res.status(200).json(response)

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:"internal server error"})
    }
}

const deleteProfile=async (req,res)=>{
    try{
        const id=req.user.id
        const username=req.user.username
        const response=await person.findByIdAndDelete(id)
        if(!response){
            res.status(400).json({error:"person not found"})
        }
        const result = await Post.deleteMany({ username: username });

        if (result.deletedCount === 0) {
            res.status(200).json({ message: "No posts found for the specified username" });
        } else {
            res.status(200).json({ message: `${result.deletedCount} posts deleted` });
        }
        console.log("data deleted")
        res.status(200).json({message:"person and posts sucessfully deleted"})
    }
    catch(err){
        res.status(500).json({error:"internal server error"})
    }
}

module.exports={signUp,login,profile,selfProfile,profileUpdate,deleteProfile,profileById}