"use client"

import axios from 'axios'
import React, { useEffect } from 'react'

const Wow = () => {
    const getData=async()=>{
        const response=await axios.get('api/users/64be6085414506222fe63e1b')
        console.log(response.data)
    }
    useEffect(()=>{
      getData()

    },[])
  return (
    <div>Wow</div>
  )
}

export default Wow