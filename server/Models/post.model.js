const { Timestamp } = require("mongodb");
const mongoose=require('mongoose');
const PostSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true]
    },
    content:{
        type:String,
        required:[true]
    },
    images:[{
        type:String,
        required:[false]
    }]
},
    {
    timestamps:true,
    }
)
const Post = mongoose.model("Post",PostSchema);

module.exports= {Post}