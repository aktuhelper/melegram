import mongoose from "mongoose";
const postSchema= new mongoose.Schema({
    caption:{type:String,default:''},
    image:{type:String,required:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    likes: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], default: [] },
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:'Comment'}]
},
{timestamps:true})
export const Post= mongoose.model('Post',postSchema);