import React from "react";
import { Link } from "react-router-dom";

export const NetflixMovies = () => {
  var movies = [
    { id: 101, name: "dhurandhar" },
    { id: 102, name: "kantara" },
    { id: 103, name: "laaaalo" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MOVIE LIST</h1>
      {
        movies.map((movie)=>{
          return <li>
            {/* <Link to={`/watch/${movie.id}`}>{movie.name}</Link> */}
            <Link to={`/watch/${movie.name}`}>{movie.name}</Link>
          </li>
        })
      }
    </div>
  );
};
