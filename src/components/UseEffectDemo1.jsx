import React, { useEffect, useState } from 'react'

export const UseEffectDemo1 = () => {

    const [count, setcount] = useState(0)

    // useEffect(()=>{
    //     console.log("use effect called...")
    // },[])
    useEffect(()=>{
        console.log("use effect called...")
    },[count]) //->whenever changes happened in count use effect will call again..

    //()=>{}call back function
    //[]==>depedency array
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE EFFECT DEMO</h1>
        <button onClick={()=>{setcount(count+1)}}>INCREMENT {count}</button>
    </div>
  )
}
