import React, { useContext, useState } from 'react'
import { BookContext } from './BookContext'
import { BookList2 } from './BookList2'

export const BookList = () => {
  const {bookData,getDataFromChild} = useContext(BookContext)
  const [userName, setuserName] = useState("ajay")
  console.log("book data...",bookData)
  

  return (
    <div style={{width:"100%",border:"1px solid black",margin:"5px",height:"auto"}}>
        <h1>BOOK LIST</h1>
        <button onClick={()=>{getDataFromChild(userName)}}>SEND DATA</button>
        {/* provider no required */}
        <BookList2></BookList2>
    </div>
  )
}
