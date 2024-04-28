const {financialPost}=require("../Models/financial.model")
const {person} = require("../Models/auth.model")


const getAllSupporters = async (req,res)=>{
    try{

        const user=req.user 
        if (user.role!=='student'){
            res.status(401).json({"error":"this can't be done by "+user.role})
        }
        const supporters = await person.find({role:"sponsor"})

        if(!supporters){
            res.status(404).json({"error":"no supporter found"})
        }
        res.status(200).json(supporters)
    }
    catch(error){
        res.status(500).json(error.json)
    }
}

const addFinancialPost = async (req,res)=>{
    try{
        const user = req.user
        if (user.role!=='student'){
            res.status(401).json({"error":"this can't be done by "+user.role})
        }
        const obj=await financialPost.create(req.body)
        res.status(200).json(obj)
    }
    catch(err){
        res.status(500).json(err.json)
    }
}

const getFinancialPosts = async(req,res)=>{
    try{
        const user = req.user
        if (user.role!=='sponsor'){
            res.status(401).json({"error":"this can't be done by "+user.role})
        }
        const obj=await financialPost.find({})
        res.status(200).json(obj)
    }
    catch(err){
        res.status(500).json(err.json)
    }
}

module.exports={
    getAllSupporters,
    addFinancialPost,
    getFinancialPosts
}