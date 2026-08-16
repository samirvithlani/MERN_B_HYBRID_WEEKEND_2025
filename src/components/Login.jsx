import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate= useNavigate()
    // const loginHandler = async()=>{
    //     //api call await..
    //     //api will provide role
    //     //if else role =="admin" ->rediect /admin
    //     //role=="user"--->/user
    //     localStorage.setItem("token","12345")
    //     localStorage.setItem("role","user") //apply hard coded...
    //     navigate("/user")

    // }

    const loginHandler = async()=>{
      const obj ={
        email:"samir300@yopmail.com",
        password:"sam123"
      }
      const res = await axios.post("http://localhost:3000/user/login",obj)
      console.log(res)
      console.log(res.data.data) //token
      localStorage.setItem("token",res.data.data)
    }

  return (
    <div>
        <h1>LOGIN...</h1>
        <button className='text-blue-500 ' onClick={()=>{loginHandler()}}>LOGIN..</button>
    </div>
  )
}
