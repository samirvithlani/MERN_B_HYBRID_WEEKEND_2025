import React from 'react'
import { useParams } from 'react-router-dom'

export const PlayContent = () => {
  //wildcard char url --->data get ...
  //how to get wildcard data from url..
  //hook function..

  //varname = useParams().id -->id??? because
  //<Route path='/watch/:id' element = {<PlayContent/>}></Route>
  const data = useParams().id

  return (
    <div style={{textAlign:"center"}}>
        <h1>WATCHING....{data}</h1>
    </div>
  )
}
