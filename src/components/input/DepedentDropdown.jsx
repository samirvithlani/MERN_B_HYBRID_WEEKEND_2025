import React, { useState } from "react";

export const DepedentDropdown = () => {
  const [selectedCountry, setselectedCountry] = useState("");
  const [selectedCity, setselectedCity] = useState("");
  const [selectedState, setselectedState] = useState("");
  // var data = [
  //     {
  //         country:"india",
  //         states:["Gujarat","Maharashtra"]
  //     },
  //     {
  //         country:"USA",
  //         states:["WD","California"]
  //     }
  // ]
  var data = [
    {
      country: "india",
      states: [
        {
          name: "Gujarat",
          city: ["Ahm", "Surat"],
        },
        {
          name: "Mah",
          city: ["Mumbai", "Pune"],
        },
      ],
    },
    {
      country: "USA",
      states: [
        {
          name: "WD",
          city: ["Abc", "Pqr"],
        },
      ],
    },
  ];
  const countryHanlder = (event) => {
    console.log(event.target.value);
    setselectedCountry(event.target.value);
  };
  const stateHandler = (event) => {
    setselectedState(event.target.value);
  };
  const cityHandler = (event) => {
    setselectedCity(event.target.value);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>DEPEDENT DROPDOWN</h1>

      <select
        onChange={(event) => {
          countryHanlder(event);
        }}
      >
        <option>SELECT COUNTRY</option>
        {data.map((d) => {
          return <option value={d.country}>{d.country}</option>;
        })}
      </select>

      <h4>{selectedCountry}</h4>
      <select
        onChange={(event) => {
          stateHandler(event);
        }}
      >
        <option>SELECT STATE</option>
        {selectedCountry &&
          data
            .find((d) => d.country == selectedCountry)
            .states.map((s) => {
              return <option>{s.name}</option>;
            })}
      </select>
      {selectedState}
      <select
        onChange={(event) => {
          cityHandler(event);
        }}
      >
        <option>SELECT CITY</option>
        {selectedState &&
          data
            .find((c) => c.country == selectedCountry)
            .states.find((s) => s.name == selectedState)
            .city.map((c) => {
              return <option>{c}</option>;
            })}
      </select>
      {selectedCity}
    </div>
  );
};
