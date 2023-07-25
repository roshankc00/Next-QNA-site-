"use client"

import { userDetail } from "@/interfaces/userInterface"
import { errorToast, sucessToast } from "@/services/toastify"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Profile = () => {
  const router=useRouter()
  const [data, setdata] = useState<userDetail>({
    email:"",
    username:"",
    isAdmin:false,
    isVerified:false,
    _id:""
  })



   const getUserDetail=async()=>{
    const response=await axios.get('/api/users/me')
    console.log(response.data.data)
    if(response.data.status){
      setdata(response.data.data)
    }

  }

  useEffect(()=>{
    getUserDetail()

  },[])
 

  // logout handler 
  const handleLogout=async()=>{
    try {    
      console.log("wow")
     const response= await axios.get('/api/users/logout')
     if(response.data.status){
       router.push("/login")
      sucessToast(response.data.message)
     }else{
      errorToast(response.data.message)
     }

      
    } catch (error:any) {
      console.log(error.message)
      errorToast(error.message)
      
    }

  }
  
  return (
    <div>

      <button className="bg-blue-500 text-white p-2 rounded-md m-1" onClick={()=>handleLogout()}>LogOut</button>
      {
        data&&
        <>
        <h1> welcome to profile page mr  {data.username}</h1>
        </>
      }
    </div>
  )
}

export default Profile