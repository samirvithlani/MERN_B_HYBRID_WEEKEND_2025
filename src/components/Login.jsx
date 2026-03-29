import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate= useNavigate()
    const loginHandler = async()=>{
        //api call await..
        //api will provide role
        //if else role =="admin" ->rediect /admin
        //role=="user"--->/user
        navigate("/admin")

    }
  return (
    <div>
        <h1>LOGIN...</h1>
        <button onClick={()=>{loginHandler()}}>LOGIN..</button>
    </div>
  )
}
