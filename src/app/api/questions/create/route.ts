import { connect } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import Question from "@/models/questionModel";

connect()
export async function POST(request:NextRequest){
    try {
        const reqbody=await request.json(); 
        const email=await  getDataFromToken(request)
        const user:any=await User.find({email})
        console.log
  
        const  question=await Question.create({
            questionName:reqbody.questionName,
            user:user._id,
            keyword:reqbody.keyword
        })
      
        user.questions.push(question._id)
        await user.save()
     
      return   NextResponse.json({
            sucess:true,
            message:"added to the database",
            question,
            user
        })
        
    } catch (error:any) {
        return NextResponse.json({
            sucess:false,
            error:error.message
        })
        
    }



}