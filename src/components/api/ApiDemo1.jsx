import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ApiDemo1 = () => {

  const [message, setmessage] = useState("")
  const [users, setusers] = useState([])

  //GET API --> backend ->
  const getUser = async()=>{
    //get --><promise<Axios
    //response -->datatype ->proimse
    const response = await axios.get("https://node5.onrender.com/user/user/")
    console.log(response) //promise object then catch [async await]
    //response -->axios object 
    //api reponse ---> response.data
    console.log(response.data) // api response..
    console.log(response.data.message)
    //set
    setmessage(response.data.message)
    console.log(response.data.data)
    setusers(response.data.data)
    
  }

  useEffect(() => {
    
    getUser()
    
  }, [])
  

  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        {/* <button onClick={()=>{getUser()}}>GET</button> */}
        {message}
        {
          users.map((user)=>{
            return <li>{user.name}</li>
          })
        }
       
    </div>
  )
}
