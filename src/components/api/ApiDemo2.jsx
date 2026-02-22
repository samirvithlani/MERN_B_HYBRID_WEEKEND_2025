import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ApiDemo2 = () => {

    const [products, setproducts] = useState([])

    const getProducts = async()=>{
        const res = await axios.get("https://dummyjson.com/products")
        console.log(res)
        console.log(res.data)
        console.log(res.data.products)
        setproducts(res.data.products) //[] -->no error
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 2</h1>
        {/* <button onClick={getProducts}>GET</button> */}
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>PRICE</th>
                    <th>DISCOUNT</th>
                    <th>RATING</th>
                    <th>STOCK</th>
                    <th>THUMBNAIL</th>
                </tr>
            </thead>
            <tbody>
                {
                    products?.map((prod)=>{
                        return <tr>
                            <td>{prod.id}</td>
                            <td>{prod.title}</td>
                            <td>{prod.category}</td>
                            <td>{prod.price}</td>
                            <td>{prod.discountPercentage}</td>
                            <td>{prod.rating}</td>
                            <td>{prod.stock}</td>
                            <td>
                                <img src={prod.thumbnail} style={{height:"50px", width:"50px"}}></img>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
