import React, { useMemo, useState } from "react";

export const FindBomb = () => {
  var girdSize = 6;
  var totalTiles = girdSize * girdSize; //36 -->number
  //const random = Math.floor(Math.random()*totalTiles)

  const random = useMemo(()=>{
    return Math.floor(Math.random()*totalTiles)
  },[])

  const [clickedTiles, setclickedTiles] = useState([])
  const [isGameOver, setisGameOver] = useState(false)

  console.log("bomb position...",random)
  console.log("selected tiles..",clickedTiles)

  const clickHandler =(index)=>{
    
    setclickedTiles([...clickedTiles,index])

    if(index==random){
        setisGameOver(true)
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FindBomb GAME</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${girdSize},60px)`,
          gap: "10px",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        {
            Array.from({length:totalTiles}).map((item,index)=>{
                return <div onClick={()=>{clickHandler(index)}}
                 style={{
                    width:"60px",
                    height:"60px",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    border:"2px solid #ccc",
                    //backgroundColor:"white",
                    backgroundColor:clickedTiles.includes(index) ? "gray":"white",
                    cursor:"pointer",
                    fontSize:"18px",
                    borderRadius:"4px",
                }}>
                       {
                       isGameOver &&  random == index ? "💣" : index+1
                       } 
                </div>
            })
        }

      </div>
    </div>
  );
};
