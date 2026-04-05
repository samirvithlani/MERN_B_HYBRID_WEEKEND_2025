import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice'

export const ProductComponent = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <h1>PRODUCT COMPOENNT</h1>
        <button onClick={()=>{dispatch(addToCart({name:"iphone",price:100}))}}>ADD TO CART</button>
    </div>
  )
}
