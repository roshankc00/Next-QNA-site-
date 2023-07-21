import { NextRequest,NextResponse } from "next/server";



export async function GET() {
    try {
        const response=NextResponse.json({
            status:true,
            message:"user loged out successfully"
        },{status:200})
        response.cookies.set("token","",{
            httpOnly:true
        })
     return response
        
    } catch (error:any) {
        return NextResponse.json({message:error.message,status:false},{status:500})
        
    }
    
}