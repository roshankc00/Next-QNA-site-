import mongoose, { mongo } from "mongoose";


const answerSchema=new mongoose.Schema({
    answerName:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    likes:{
        type:Number,
        default:0
    },
},{timestamps:true})


const Answer=mongoose.model.answer || mongoose.model("Answer",answerSchema)

export default Answer