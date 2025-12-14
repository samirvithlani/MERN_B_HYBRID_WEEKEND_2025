import React from "react";

export const MapDemo3 = () => {
  const users = [
    { id: 1, name: "raj", age: 23 },
    { id: 2, name: "amit", age: 24 },
    { id: 3, name: "kunal", age: 22 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 3</h1>
      <table border="1" align="center">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
            </tr>
        </thead>
        <tbody>
          {
            users.map((user)=>{
                return <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
};
