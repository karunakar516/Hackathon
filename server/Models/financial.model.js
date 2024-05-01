const mongoose = require("mongoose")

const financialSchema = mongoose.Schema({

    createdBy:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true
    },

    document_urls:[{
        type:String,
        required:true
    }]
},{
    timestamps:true
})

const financialPost = mongoose.model("financialPost",financialSchema)

module.exports={financialPost}