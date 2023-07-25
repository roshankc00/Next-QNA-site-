import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { userSignupZodValidation } from "@/utils/zodValidation";


connect()


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        console.log("me")
        const {username, email, password} = reqBody 
        console.log("me")
        // zod validation
        let  result=userSignupZodValidation.safeParse(reqBody)
        let validData:any=JSON.stringify(result,null,2)
         validData=JSON.parse(validData)
         console.log(validData.error)
        if(!validData.success){
            return   NextResponse.json({
                status:false,
                error:validData
            })  
      
        }

        const user = await User.findOne({email})
        
        if(user){
            return NextResponse.json({error: "User already exists",status:false}, {status: 400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword 
        })

        const savedUser = await newUser.save()
    



        return NextResponse.json({
            message: "User created successfully",
            status: true,
            savedUser
        })
        
        


    } catch (error: any) {
        return NextResponse.json({message: error.message}, {status: 500})

    }
}