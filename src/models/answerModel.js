import mongoose, { mongo } from "mongoose";


const answerSchema=new mongoose.Schema({
    answerName:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    likes:{
        type:Number,
        default:0
    },
},{timestamps:true})


const Answer=mongoose.model.answers || mongoose.model("answers",answerSchema)

export default Answer