import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import Question from "@/models/questionModel";
import { NextRequest,NextResponse } from "next/server";

connect()
export async function GET(requset:NextRequest) {
    try {
       const questions=await Question.find({})
    return  NextResponse.json({
        status:true,
        questions
     })
        
    } catch (error:any) {
        return NextResponse.json({message:error.message,status:false},{status:500})
        
    }
}

export async function DELETE(requset:NextRequest) {
    try {
       const id=requset.nextUrl.searchParams.get('id')
       const question=await Question.findByIdAndDelete(id)
    return  NextResponse.json({
        status:true,
        message:"question deleted sucessfully"
     })
        
    } catch (error:any) {
        return NextResponse.json({message:error.message,status:false},{status:500})
        
    }
}