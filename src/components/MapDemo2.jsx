import React from "react";

export const MapDemo2 = () => {
  const users = [
    { id: 1, name: "raj", age: 23 },
    { id: 2, name: "amit", age: 24 },
    { id: 3, name: "kunal", age: 22 },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 2</h1>
      {
        users.map((u,index)=>{
            return <li>{u.id} {u.name} {u.age}</li>
        })
      }
    </div>
  );
};
