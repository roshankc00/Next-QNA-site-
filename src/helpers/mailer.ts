import nodemailer from 'nodemailer'
import User from '@/models/userModel'
import bcrypt from 'bcryptjs'
import { sendEmailInterface } from '@/interfaces/userInterface'


export const sendMail=async({email,emailType,userId}:any)=>{
    try {
        const token=await bcrypt.hash(userId.toString(),10)
    
        if(emailType==="VERIFY"){
            await User.findByIdAndUpdate(userId,{
                verifyToken:token,
                verifyTokenExpiry:Date.now()+3600000
            },
            {
                new:true
            })
            
        }else if(emailType==="RESETPASSWORD"){
            if(emailType==="VERIFY"){
                await User.findByIdAndUpdate(userId,{
                    forgotPasswordToken:token,
                    forgotPasswordTokenExpiry:Date.now()+3600000
                },
                {
                    new:true
                })

        }
    }

  
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "b35d59287c4a69",
          pass: "fa0ee13e72b41d"
        }
      });


      const mailOptions={
        from:"roshan@gmail.com",
        to:email,
        subject:emailType==="VERIFY"?"Verify your email":"Reset your Password",
        html:`<p> ${emailType==="VERIFY"?"Verify your email":"Reset your Password"} http://localhost:3000//verifyemail?token=${token} </p>`
      }
      const mailresponse=await transport.sendMail(mailOptions)

        
    } catch (error:any) {
        console.log(error.message)
        
    }

}
