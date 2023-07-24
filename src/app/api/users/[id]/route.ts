import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
connect()



export async function GET(request:NextRequest,{params}:any) {
    try {
        console.log("me")
        const {id}=params;
        console.log("me")
        const user=await User.findById(id)
       return  NextResponse.json({
            user
        })
     
        
    } catch (error:any) {
        return NextResponse.json({message:error.message,status:false},{status:500})
        
    }
}



export async function PUT(request:NextRequest,{params}:any) {
    try {
        console.log("me")
        const {id}=params;
        const reqbody=await request.json()
    
        console.log("me")
        const user=await User.findByIdAndUpdate(id,reqbody,{new:true})
       return  NextResponse.json({
            user
        },{status:200})
     
        
    } catch (error:any) {
        return NextResponse.json({message:error.message,status:false},{status:500})
        
    }
}

