import React, { useState } from "react";

export const InputDemo2 = () => {
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [country, setcountry] = useState("");
  const [color, setcolor] = useState("");
  const [isSubbmited, setisSubbmited] = useState(false);

  const submitHandler = () => {
    setisSubbmited(true);
  };

  const ageHandler = (event) => {
    if (event.target.value < 18) {
      alert("not valid..");
    }
  };

  const nameHandler = (event) => {
    console.log(event.target.value);
    setname(event.target.value);
  };

  const genderHandler = (event) => {
    console.log(event.target.value);
    setgender(event.target.value);
  };
  const countryHandler = (event) => {
    console.log(event.target.value);
    setcountry(event.target.value);
  };
  const colorHandler = (event) => {
    console.log(event.target.value);
    setcolor(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>INPUT DEMO 2</h1>
      <div>
        <label>NAME:</label>
        <input
          type="text"
          onChange={(event) => {
            nameHandler(event);
          }}
        ></input>
      </div>
      <div>
        <label>AGE</label>
        <input
          type="number"
          onChange={(event) => {
            ageHandler(event);
          }}
        ></input>
      </div>
      <div>
        <label>GENDER</label>
        <br></br>
        MALE :{" "}
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(event) => {
            genderHandler(event);
          }}
        ></input>{" "}
        <br></br>
        FEMALE :{" "}
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(event) => {
            genderHandler(event);
          }}
        ></input>{" "}
        <br></br>
      </div>
      <div>
        <label>SELECT COUNTRY</label>
        <select
          onChange={(event) => {
            countryHandler(event);
          }}
        >
          <option value="india">INDIA</option>
          <option value="usa">USA</option>
          <option value="aus">Aus</option>
        </select>
      </div>
      <div>
        <label>SELECT COLOR</label>
        <input
          type="color"
          onChange={(event) => {
            colorHandler(event);
          }}
        ></input>
      </div>
      <div>
        <button onClick={submitHandler}>SUBMIT</button>
      </div>

      {isSubbmited == true && (
        <div style={{ color: color }}>
          <h1>OUTPUT</h1>
          <h4>Name = {name}</h4>
        </div>
      )}
    </div>
  );
};
