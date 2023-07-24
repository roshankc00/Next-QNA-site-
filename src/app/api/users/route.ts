import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";

connect()
export async function GET(requset:NextRequest) {
    try {
       const users=await User.find({})
    return  NextResponse.json({
        status:true,
        users
     })
        
    } catch (error:any) {
        return NextResponse.json({message:error.message,status:false},{status:500})
        
    }
}

export async function DELETE(requset:NextRequest) {
    try {
       const id=requset.nextUrl.searchParams.get('id')
       const users=await User.findByIdAndDelete(id)
    return  NextResponse.json({
        status:true,
        message:"user deleted sucessfully"
     })
        
    } catch (error:any) {
        return NextResponse.json({message:error.message,status:false},{status:500})
        
    }
}