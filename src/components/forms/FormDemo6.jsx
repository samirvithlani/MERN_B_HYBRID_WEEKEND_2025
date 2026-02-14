import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const FormDemo6 = () => {
    const{register,handleSubmit,control}=useForm({defaultValues:{medicine:[{name:"",dosage:0,frequency:0}]}})

    const {fields,append,remove} =useFieldArray({control,name:"medicine"})
    
    //control --> default value --> array -->fileds--->array 
    const submitHandler = (data)=>{
        console.log(data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo6</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {
                fields.map((filed,index)=>{
                    return <div>
                        <div>
                            <label>NAME</label>
                            <input type='text' {...register(`medicine.${index}.name`)}></input>
                        </div>
                        <div>
                            <label>Dosage</label>
                            <input type='text' {...register(`medicine.${index}.dosage`)}></input>
                        </div>
                        <div>
                            <label>Frequecy</label>
                                <input type='text' {...register(`medicine.${index}.frequency`)}></input>
                            </div>
                    </div>
                })
            }
            <div>
                <input type='submit'></input>
            </div>
        </form>
        <button onClick={()=>{append([{name:"",dosage:0,frequency:0}])}}>ADD MEDICINE</button>
    </div>
  )
}

