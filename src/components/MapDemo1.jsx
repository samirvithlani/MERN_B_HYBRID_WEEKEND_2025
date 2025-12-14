import React from 'react'

export const MapDemo1 = () => {
    var students = ["amit","raj","parth","jay","kunal"]
    //forloop
    //forEach --> map
    //it required new array to return 
  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 1</h1>
        <ul>
        {
            students.map((stu,index)=>{
                return <li>{stu}</li>
            })
        }
        </ul>
    </div>
  )
}
