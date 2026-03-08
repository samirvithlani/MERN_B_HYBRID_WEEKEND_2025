import React, { useMemo, useState } from 'react'

export const UseMemoDemo = () => {

const [count, setcount] = useState(0)
const [marks, setmarks] = useState(0)
//const randomNo = Math.floor(Math.random()*1000)
//()=>{}call back ,[] depednacy array
const randomNo = useMemo(()=>{
    return Math.floor(Math.random()*1000)
},[marks])
//if any changes happens with marks random no will regenrate.

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE MEMO DEMO</h1>
        <button onClick={()=>{setcount(count+1)}}>increse</button>
        <button onClick={()=>{setmarks(marks+1)}}>increse marks</button>
        <h1>count {count}</h1>
        <h1>marks = {marks}</h1>
        <h1>random {randomNo}</h1>
    </div>
  )
}
