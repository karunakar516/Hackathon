const express = require("express")
const financialRouter=express.Router()
const {jwtAuthMiddleware}=require("../Middlewares/auth.middleware")

financialRouter.get("/getAllSupporters",jwtAuthMiddleware,getAllSupporters)

financialRouter.post("/addFinancialPost",jwtAuthMiddleware,addFinancialPost)

financialRouter.get("/getFinancialPosts",jwtAuthMiddleware,getFinancialPosts)

module.exports= {financialRouter}