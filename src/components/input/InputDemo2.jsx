import React from 'react'

export const InputDemo2 = () => {

    const nameHandler = (event)=>{
        console.log(event.target.value)
    }   

    const genderHandler = (event)=>{
        console.log(event.target.value)
    }
    const countryHandler = (event)=>{
        console.log(event.target.value)
    }
    const colorHandler = (event)=>{
        console.log(event.target.value)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT DEMO 2</h1>
        <div>
            <label>NAME:</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
        </div>
        <div>
            <label>GENDER</label><br></br>
            MALE : <input type='radio' name='gender' value="male" onChange={(event)=>{genderHandler(event)}}></input> <br></br>
            FEMALE : <input type='radio' name='gender'  value="female" onChange={(event)=>{genderHandler(event)}}></input> <br></br>
        </div>
        <div>
            <label>SELECT COUNTRY</label>
            <select onChange={(event)=>{countryHandler(event)}}>
                <option value="india">INDIA</option>
                <option value="usa">USA</option>
                <option value="aus">Aus</option>
            </select>
        </div>
        <div>
            <label>SELECT COLOR</label>
            <input type='color' onChange={(event)=>{colorHandler(event)}}></input>
        </div>
        <div>
            <button>SUBMIT</button>
            </div>
    </div>
  )
}
