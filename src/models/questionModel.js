import mongoose, { Mongoose } from 'mongoose'
import { string } from 'zod'

const questionScheama=new mongoose.Schema({
    questionName:{
        type:String,
        required:[true,]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    likes:{
        type:Number,
        default:0
    },
    keyword:{
        type:String,
    },
    answers:[{
        type:Mongoose.Schema.types.ObjectId,
        ref:"Answer"
    }]


  

},{timestamps:true})


const Question=mongoose.model.question || mongoose.model('Question',questionScheama)

export default Question 