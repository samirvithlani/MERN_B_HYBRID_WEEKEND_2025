import React, { useEffect, useRef } from 'react'

export const UseRefDemo1 = () => {
    const inputRef = useRef() //<input?
    const focusHanlder = ()=>{
        inputRef.current.focus()
    }
    useEffect(() => {
      
    inputRef.current.focus()
      
    }, [])
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE REF DEMO 1</h1>
        <div>
            <label>ENTER NAME:</label>
            <input type='text' ref={inputRef}></input>
        </div>
        <div>
            <button onClick={focusHanlder}>FOUCS</button>
        </div>
    </div>
  )
}
