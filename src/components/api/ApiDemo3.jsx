import axios from "axios";
import React from "react";

export const ApiDemo3 = () => {
  // const addUser = async()=>{
  //     //dummy object
  //     const userObj = {

  //         name:"parth",
  //         age:23,
  //         password:"parth123",
  //         email:"parth12345@gmail.com",
  //         isActive:false
  //     }

  //     //api call...
  //     const res = await axios.post("https://node5.onrender.com/user/user/",userObj)
  //     console.log(res)
  //     console.log(res.data) // api response..
  //     //post("url",obj)
  //     //status code -->404 -->not found.. -all browser -->all tech -->
  //     if(res.status==200){
  //         alert("user added..")
  //     }

  // }

  const addUser = async () => {
    //dummy object
    const userObj = {
      name: "kunal",
      age: 23,
      password: "kunal123",
      email: "kuni234@gmail.com",
      isActive: false,
    };

    //api call...
    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user/",
        userObj,
      );
      console.log(res);
      console.log(res.data); // api response..

      if (res.status == 200) {
        alert("user added..");
      }
    } catch (err) {
      alert("error while adding user..");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 3</h1>
      <button onClick={addUser}>ADD</button>
    </div>
  );
};
