const express = require("express")
const postRouter =express.Router()
const {jwtAuthMiddleware}=require("../Middlewares/auth.middleware")
const {addPost,editPost,viewAllPosts,viewPostsByUser}= require("../Controllers/post.controller")

postRouter.post('/addPost',jwtAuthMiddleware,addPost)
postRouter.put('/editPost/:postId',jwtAuthMiddleware,editPost)
postRouter.get('/viewAllPosts',viewAllPosts)
postRouter.get('/viewPosts/:username',viewPostsByUser)

module.exports={postRouter}
