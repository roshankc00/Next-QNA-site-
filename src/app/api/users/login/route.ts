import { NextRequest, NextResponse } from "next/server";
import {connect} from '@/dbConfig/dbConfig'
import User from "@/models/userModel";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

connect()

const secret=process.env.SECRET

export async function POST(request: NextRequest) {
    console.log(secret)
    try {
        const body=await request.json()
        const {email,password}=body

        const userExist=await User.findOne({email})
        if(!userExist){
            return NextResponse.json({error:"invalid credentials",status:false},{status:401})

        }

        const isPasswordCorrect=await bcrypt.compare(password,userExist.password)
        if(!userExist){
            return NextResponse.json({error:"invalid credentials",status:false},{status:401})

        }
        const data={
            email:userExist.email
        }

        const token= jwt.sign(data,"jnfndfndf")

        const response=NextResponse.json({
            status:true,
            message:"user loged in sucessfully"
        })

        response.cookies.set("token",token,{
            httpOnly:true
        })
  
        return response



        
    } catch (error:any) {
        return NextResponse.json({error:error.message,status:false},{status:500})
        
    }
    
  }