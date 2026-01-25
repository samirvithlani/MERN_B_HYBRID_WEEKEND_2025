import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const submitHandler = (data)=>{
        console.log(data)
    }

    //refcode =["dhirajsir","insta","mihir","jagrut"]
    //loop**** builtin function..

    const validationSchema ={
        nameValidator:{
            required:{
                value:true,
                message:"Name is Required*"
            },
            minLength:{
                value:3,
                message:"min len should be 3"
            },
            maxLength:{
                value:12,
                message:"max len should be 12"
            }

        },
        contactValidator:{
            required:{
                value:true,
                message:"contact is required*"
            },
            pattern:{
                value:/^[6-9]{1}[0-9]{9}$/,
                message:"invalid contact no"
            }
        },
        refCodevalidator:{
            required:{
                value:true,
                message:"ref code is required *"
            },
            //dhirajsir
            validate:(params)=>{
                //console.log("params..",params)
                //of first part is wrong || it will execute 2nd part
                return params == "dhirajsir" || "invalid ref code."
            }
        },
        hobbiesValidator:{
            required:{
                value:true,
                message:"hobbies are required *"
            },
            validate:(params)=>{
                console.log(params)
                return params.length<2 && "min 2 hobbies are required*"
            }
        }
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 4</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                {errors.name?.message}
            </div>
            <div>
                <label>CONTACT</label>
                <input type='text' {...register("contact",validationSchema.contactValidator)}></input>
                {errors.contact?.message}
            </div>
            <div>
                <label>REF CODE</label>
                <input type='text' {...register("refcode",validationSchema.refCodevalidator)}></input>
                {errors.refcode?.message}
            </div>
            <div>
                <label>HOBBIES</label> <br></br>
                CRICKET <input type='checkbox'value="cricket" {...register("hobbies",validationSchema.hobbiesValidator)}></input> <br></br>
                Chess <input type='checkbox'value="chess" {...register("hobbies",validationSchema.hobbiesValidator)}></input> <br></br>
                Football <input type='checkbox'value="football" {...register("hobbies",validationSchema.hobbiesValidator)}></input> <br></br>
                Reading <input type='checkbox' value="reading" {...register("hobbies",validationSchema.hobbiesValidator)}></input> <br></br>
                
            </div>
            {errors.hobbies?.message}
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
