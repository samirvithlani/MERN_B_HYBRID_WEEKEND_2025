import React, { useState } from 'react'
import { ProductList } from './ProductList'

//prod com... parent
//child  product list
//title = {title}
//key = value
//? do we need to give same name as variable name for key =->>> No
export const Products = () => {

    //string
    var title = "PRODUCTS"
    //object variable
    var Companydetail = {
        name:"TCS",
        city:"G-Nagar"
    }
    //array
    const [productData ,setproductData] = useState([
        { id: 1, name: "iphone", price: 1200, color: "blue" },
        { id: 2, name: "laptop", price: 1400, color: "black" },
        { id: 3, name: "cahrger", price: 100, color: "white" },
      ]);

  return (
    <div style={{textAlign:"center"}}>
        <h1>PRODUCTS</h1>
        <ProductList title = {title} detail = {Companydetail} productData = {productData}></ProductList>
    </div>
  )
}
