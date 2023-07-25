import mongoose, { Mongoose } from 'mongoose'
import { string } from 'zod'

const questionScheama=new mongoose.Schema({
    questionName:{
        type:String,
        required:[true,]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    likes:{
        type:Number,
        default:0
    },
    keyword:{
        type:String,
    },
    answers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"answers"
    }]


  

},{timestamps:true})

console.log(mongoose.model)


const Question = mongoose.models.questions || mongoose.model("questions", questionScheama);

export default Question