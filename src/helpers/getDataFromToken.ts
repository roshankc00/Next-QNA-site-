import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'
import { tokenData } from "@/interfaces/userInterface";
export const getDataFromToken=(request:NextRequest)=>{
    try {
        const token=request.cookies.get('token')?.value || "";
        const decordedToken:any=jwt.verify(token,"jnfndfndf")
        return decordedToken.email        
    } catch (error:any) {
        throw new Error(error.message)
        
    }
}