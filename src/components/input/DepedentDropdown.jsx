import React, { useState } from 'react'

export const DepedentDropdown = () => {

    const [selectedCountry, setselectedCountry] = useState("")
    var data = [
        {
            country:"india",
            states:["Gujarat","Maharashtra"]
        },
        {
            country:"USA",
            states:["WD","California"]
        }
    ]
    const countryHanlder = (event)=>{
        console.log(event.target.value)
        setselectedCountry(event.target.value)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>DEPEDENT DROPDOWN</h1>

        <select onChange={(event)=>{countryHanlder(event)}}>
            <option>SELECT COUNTRY</option>
            {
                data.map((d)=>{
                    return<option value={d.country}>{d.country}</option>
                })
            }
        </select>
        <h4>{selectedCountry}</h4>
        <select>
            <option>SELECT STATE</option>
            {
                selectedCountry && data.find((d)=>d.country==selectedCountry).states.map((s)=>{
                    return <option>{s}</option>
                })
            }
        </select>
    </div>
  )
}
