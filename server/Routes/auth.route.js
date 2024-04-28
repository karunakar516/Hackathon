const express = require("express")
const authRouter=express.Router()
const {jwtAuthMiddleware}=require("../Middlewares/auth.middleware")
const {signUp,login,profile,selfProfile,profileUpdate,deleteProfile,profileById} = require("../Controllers/auth.controller")


//signup route
authRouter.post('/register',signUp)

// login route
authRouter.post('/login',login)

// profile route
authRouter.get('/profile',jwtAuthMiddleware,selfProfile)

authRouter.get('/profile/:username',profile)
authRouter.get('/profile/id/:id',profileById)

authRouter.put('/profileUpdate',jwtAuthMiddleware,profileUpdate)
authRouter.delete('/deleteProfile',jwtAuthMiddleware,deleteProfile)

module.exports={authRouter}