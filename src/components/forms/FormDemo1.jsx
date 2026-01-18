import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo1 = () => {
  const { register, handleSubmit } = useForm();
  //register is functin : it connectes your input with form props
  //handlesubmit function : it will handle submit event and give all regsiterd data

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FormDemo1</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
            <label>GENDER</label><br></br>
            MALE: <input type="radio" value="male" {...register("gender")}></input> <br></br>
            FEMALE: <input type="radio" value="female" {...register("gender")} ></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
