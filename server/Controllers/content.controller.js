const { Content } = require("../Models/content.model")
const {person} = require("../Models/auth.model")

const getAllContentDetails = async(req,res)=>{
    try{
        const content_obj = await Content.find({});
        const result = [];

        for (const object of content_obj) {
            result.unshift({
                "title": object.title,
                "description": object.description,
                "createdAt":object.createdAt
            });
        }
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json(error.json)
    }
}

const addContent = async(req,res)=>{
    try{
       const content_obj= await Content.create(req.body)
       res.status(200).json(content_obj)
    }
    catch(error){
        res.status(500).json(error.json)
    }
}

const getSubscribedContent = async (req,res) =>{
    try{
        const user=req.user
        const content_objects = await Content.find({})
        const result=[]
        for(const obj of content_objects){
            if (user.subscribed_content.contains(obj.id)){
                result.unshift(obj)
            }
        }
        res.status(200).json(result)
    }
    catch(err){
        res.status(500).json(res.json)
    }
}

const subscribeContent = async (req,res)=>{
    try{
        const {id} = req.params
        const userSubscribedContent=req.user.subscribed_content
        userSubscribedContent.unshift(id)
        const userid = req.user.id 
        const obj = await person.findByIdAndUpdate(userid,{
            subscribed_content:userSubscribedContent
        })
        if(!obj){
            res.status(404).json({"error":"not found"})
        }
        res.status(201).json(obj)
    }
    catch(err){
        res.status(500).json(err.json)
    }
}
module.exports={
    getAllContentDetails,
    getSubscribedContent,
    addContent,
    subscribeContent
}


