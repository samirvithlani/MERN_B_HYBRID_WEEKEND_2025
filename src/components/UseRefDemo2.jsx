import React, { useEffect, useRef } from 'react'

export const UseRefDemo2 = () => {
    const divref = useRef()
    useEffect(()=>{
        divref.current.scrollIntoView({behavior:"smooth"})
    })
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE REF DEMO 2</h1>
        <div style={{backgroundColor:"orange",height:"600px",width:"100%"}}></div>
        <div style={{backgroundColor:"white",height:"600px",width:"100%"}}></div>
        <div ref = {divref} style={{backgroundColor:"green",height:"600px",width:"100%"}}></div>
    </div>
  )
}
