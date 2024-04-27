const {Post}=require("../Models/post.model") 
const addPost = async (req,res) =>{
    try{
        const username=req.user.username
        const postObj=req.body 
        postObj['username']=username
        const post=await Post.create(postObj)
        res.status(200).json(post)
    }
    catch(error){
        res.status(500).json(error.json())
    }
}
const editPost = async (req,res) =>{
    try{
        const {postId}=req.params
        const post=await Post.findByIdAndUpdate(postId,req.body,{new:true})
        if(!post){
            res.status(404).json({"error":"not found"})
        }
        res.status(200).json(post)
    }catch(err){
        res.status(500).json(error.json())
    }
}

const viewAllPosts = async (req,res) =>{
    try{
        const posts=await Post.find({})
        res.status(201).json(posts);
    }
    catch(err){
        res.status(500).json(error.json())
    }
}
const viewPostsByUser = async (req,res) =>{
    try{
        const {username} = req.params 
        const posts= await Post.find({"username":username})
        res.status(200).json(posts)
    }
    catch(error){
        res.status(500).json(error.json)
    }
}
module.exports={
    addPost,
    editPost,
    viewAllPosts,
    viewPostsByUser

}