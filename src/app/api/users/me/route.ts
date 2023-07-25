import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";



connect()





export async function GET(request:NextRequest) {
    try {
       const email=await  getDataFromToken(request)
       const user=await User.findOne({email}).select("-password,__v")
       return NextResponse.json({
        status:true,
        data:user
       },{status:200})

       
        
    } catch (error:any) {
        return NextResponse.json({message:error.message,status:false},{status:500})
        
    }
    
}
