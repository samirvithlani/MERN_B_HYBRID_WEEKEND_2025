import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice'

export const ProductComponent = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <h1>PRODUCT COMPOENNT</h1>
        <button onClick={()=>{dispatch(addToCart({id:1,name:"iphone",price:100}))}}>ADD TO CART iphone </button>
        <button onClick={()=>{dispatch(addToCart({id:2,name:"ipad",price:100}))}}>ADD TO CART</button>
        <button onClick={()=>{dispatch(addToCart({id:3,name:"laptop",price:100}))}}>ADD TO CART</button>
    </div>
  )
}
