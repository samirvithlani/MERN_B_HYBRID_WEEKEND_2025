import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
const {register,handleSubmit,formState:{errors},watch} = useForm({mode:"onChange"})
const password = watch("password") // input password --> // it should match with register
console.log("watching password....",password)

const submitHandler = (data)=>{
    console.log(data)
}
const validationSchema = {
    passwordValidator:{
        required:{
            value:true,
            message:"password is required *"
        }
    },
    confirmPasswordValidator:{
        required:{
            value:true,
            message:"password is required *"
        },
        validate:(params)=>{
            //confirmPassword...
            return params === password || "Both password are not matched.."
        }
    }
}


  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>PASSWORD</label>
                <input type='password' {...register("password",validationSchema.passwordValidator)}></input>
                {errors.password?.message}
            </div>
            <div>
                <label>CONFIRM PASSWORD</label>
                <input type='password' {...register("confirmPassword",validationSchema.confirmPasswordValidator)}></input>
                {errors.confirmPassword?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
