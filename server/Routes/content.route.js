const express = require("express")

const contentRouter=express.Router()

const {
    getAllContentDetails,
    getSubscribedContent,
    addContent,
    subscribeContent
} = require("../Controllers/content.controller")

const {jwtAuthMiddleware}=require("../Middlewares/auth.middleware")


contentRouter.get("/getAllContentDetails",getAllContentDetails)

contentRouter.post("/addContent",jwtAuthMiddleware,addContent)

contentRouter.get("/getSubscribedContent",jwtAuthMiddleware,getSubscribedContent)

contentRouter.put("/subscribeContent/:id",jwtAuthMiddleware,subscribeContent)

module.exports={contentRouter}