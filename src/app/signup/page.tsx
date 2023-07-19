"use client";
import React, { useState } from 'react'
import { Formik,ErrorMessage,Field,Form } from 'formik';
import {object,string} from'yup'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';


const Signup = () => {
  const router=useRouter()

 

  const initialValue={
    username:"",
    password:"",
    email:""
  }

  const validationSchema=object().shape({
    username:string().required("name is required"),
    password:string().required("password is requried"),
    email:string().required("email is required")
    

  })
  console.log(process.env.SECRET)
  const handleSubmit=async(values:any,{setSubmitting}:any)=>{
    try {
      console.log(values)
      const response=await axios.post('/api/users/signup',{
        username:values.username,
        email:values.email,
        password:values.password
      })

      if(response.data.status){
        router.push('/login')
      }


    

      
      setSubmitting(false)
    } catch (error:any) {
      console.log(error.message)
      
    }
  }
  return (
    <div className='h-["100vh"] flex justify-center items-center mt-10'>
    <div className='max-w-md h-full mx-auto mb-2 border p-4  '>
      <h1 className='text-center text-2xl font-bold mb-4'>Sign up</h1>
      
       <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({isSubmitting})=>{
          return(
            <Form>
              

              <div>
              <label htmlFor="username" className='w-full mb-4 text-xl'> Name:</label>
              <Field type="text" name="username" className='w-full mb-4 border p-3'></Field>
              <ErrorMessage name="username" component="div"className="text-red-700 mb-2 text-xl"/>
              </div>

              <div>
              <label htmlFor="email" className='w-full mb-4 text-xl'> Email:</label>
              <Field type="text" name="email" className='w-full mb-4 border p-3'></Field>
              <ErrorMessage name="email" component="div" className="text-red-700 mb-2 text-xl"/>
              </div>

              <div>
              <label htmlFor="password" className='w-full mb-4 text-xl'> password:</label>
              <Field type="password" name="password" className='w-full mb-4 border p-3'></Field>
              <ErrorMessage name="password" component="div" className="text-red-500 mb-2 text-xl"/>
              </div>
              <button type='submit' className='bg-blue-700 p-2 text-white rounded-md my-2'> 
              {
                isSubmitting?"creating...":" submit"
              }
              
              </button>

            </Form>

          )
        }}
       </Formik>
       <Link  href='/login' className=''>Already Register</Link>
   
    </div>
    </div>
  )
}

export default Signup 


// server component 