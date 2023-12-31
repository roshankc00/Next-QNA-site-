"use client";
import React, { useEffect, useState } from 'react'
import { Formik,ErrorMessage,Field,Form } from 'formik';
import {object,string} from'yup'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { errorToast, loadingToast, sucessToast } from '@/services/toastify';
import { toast } from 'react-toastify';



const Login= () => {
  const router=useRouter()






  const initialValue={
      email:"",
    password:"",
  }

  const validationSchema=object().shape({
    password:string().required("password is requried"),
    email:string().required("email is required").min(6)
    

  })
  const handleSubmit=async(values:object)=>{
    const response=await axios.post('/api/users/login',values)
    if(response.data.status){
      sucessToast(response.data.message)
      router.push('/profile')
    }else{
       errorToast(response.data.message)
    }
 

  }
  return (
    <div className='h-["100vh"] flex justify-center items-center mt-10'>
    <div className='max-w-md h-full mx-auto mb-2 border p-4  '>
      <h1 className='text-center text-2xl font-bold mb-4'>Login</h1>
      
       <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {()=>{
          return(
            <Form>             

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
              <button type='submit' className='bg-blue-700 p-2 text-white rounded-md my-2'> Submit</button>

            </Form>

          )
        }}
       </Formik>
   
    </div>
    </div>
  )
}

export default Login


// server component 