import React from 'react'

export const SubProductList = (props) => {
    console.log("Sub Product LIst ",props)
  return (
    <div>
        <h1>SUB PRODUCT LIST</h1>
        <h3>Title = {props.title}</h3>
    </div>
  )
}
