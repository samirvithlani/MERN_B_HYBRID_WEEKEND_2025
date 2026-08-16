import axios from 'axios'
import React, { useEffect } from 'react'

export const UsersComponent = () => {
    const getUserData = async()=>{
        //const res = await axios.get("http://localhost:3000/users")
        //token api
        const res = await axios.get("http://localhost:3000/users",{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(res)
    }
    useEffect(() => {
      
        getUserData()
      
    }, [])
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>UsersComponent</h1>
    </div>
  )
}
