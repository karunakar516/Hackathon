const express = require("express")
const financialRouter=express.Router()
const {jwtAuthMiddleware}=require("../Middlewares/auth.middleware")
const {getAllSupporters,addFinancialPost,getFinancialPosts} = require("../Controllers/financial.controller")

financialRouter.get("/getAllSupporters",jwtAuthMiddleware,getAllSupporters)

financialRouter.post("/addFinancialPost",jwtAuthMiddleware,addFinancialPost)

financialRouter.get("/getFinancialPosts",jwtAuthMiddleware,getFinancialPosts)

module.exports= {financialRouter}