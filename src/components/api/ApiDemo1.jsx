import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

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

  const deleteUser = async(id)=>{
    //alert("delete called..."+id)
    //https://node5.onrender.com/user/user/id
    const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
    console.log(res) //axios object
    console.log(res.data) ///sctual response..
    console.log(res.status) //204 --> 
    if(res.status == 204){
      //alert("user deletd..")
      toast.success("user deleted...")
      //database fetch -->get api call..
      getUser() //---> get api call..

      
    }
    else{
      alert("error while deleteing user..")
    }
  }



  useEffect(() => {
    
    getUser()
    
  }, [])
  

  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        {/* <button onClick={()=>{getUser()}}>GET</button> */}
        {message}
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>AGE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
          users.map((user)=>{
            return <tr>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <button className='btn btn-danger' onClick={()=>{deleteUser(user._id)}}>DELETE</button>
              </td>
            </tr>
          })
        }
          </tbody>
        </table>
        
       
    </div>
  )
}
