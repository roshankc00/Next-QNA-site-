import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from '@/models/userModel';

connect()

export default async function POST(request:NextRequest){
    try {
        const reqBody=await request.json()
        const {token}=reqBody

        console.log(token)
        const user= await User.findOne({
            verifyToken:token,
            verifyTokenExpiry:{$gt:Date.now()}
            
        })

        if(!user){
            NextResponse.json({
                messgae:"Invalid token or token expired"
            },{status:400})
        }

        user.isVerified=true
        user.verifyToken=undefined;
        user.verifyTokenExpiry=undefined;
        await user.save()
        return NextResponse;



        
    } catch (error:any) {
        
        
        return NextResponse.json({
            message:error.message,
            status:false
        })
        
    }


}