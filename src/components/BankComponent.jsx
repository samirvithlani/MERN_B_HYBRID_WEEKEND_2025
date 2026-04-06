import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { depositAction } from '../redux/BankSlice'

export const BankComponent = () => {
    const dispatch = useDispatch()
    const [dep, setdep] = useState(0)
    const deposithandler = ()=>{
        //action..
        dispatch(depositAction(parseInt(dep)))
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>BANK COMPONENTE</h1>
        <div>
            <label>DEPOSIT AMOUNt</label>
            <input type ="text" onChange={(event)=>{setdep(event.target.value)}}></input>
            <button onClick={deposithandler}>deposit</button>
            </div>
    </div>
  )
}
