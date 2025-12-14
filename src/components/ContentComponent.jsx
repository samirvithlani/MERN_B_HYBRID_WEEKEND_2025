import React from "react";

//rafc -->react arrow function component
export const ContentComponent = () => {
  const contentStyle = {
    textAlign: "center",
    height: "300px",
    margin: "5px",
    border: "1px solid black",
  };
  return (
    <div style={contentStyle}>
      <h1>CONTENT COMPONENT</h1>
    </div>
  );
};
