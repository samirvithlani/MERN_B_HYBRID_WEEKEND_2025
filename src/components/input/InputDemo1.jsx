import React, { useState } from 'react'

export const InputDemo1 = () => {
    const [name, setname] = useState("")
    const [age, setage] = useState("")

    const nameHandler = (event)=>{
        //console.log(event)
        console.log(event.target.value)
        setname(event.target.value)
    }
    const ageHandler = (event)=>{
        console.log(event.target.value)
        setage(event.target.value)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT DEMO 1</h1>
        <div>
            <label>NAME</label>
            <input type='text' placeholder='enter name' onChange={(event)=>{nameHandler(event)}}></input>
            {name}
        </div>
        <div>
            <label>AGE</label>
            <input type='number' placeholder='enter age' onChange={(event)=>{ageHandler(event)}}></input>
            {age}
        </div>
    </div>
  )
}
