import React from "react";
import { Link } from "react-router-dom";

export const NetflixShows = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>NetflixShows</h1>
      <div>
        <ul>
          <li>
            <Link to="/watch">Money Heist</Link>
          </li>
          <li>
            <Link to="/watch">Breaking Bad</Link>
          </li>
          <li>
            <Link to="/watch">Dhurnadhar</Link>
          </li>

          <li>
            <Link to="/watch/money heist">Money Heist</Link>
          </li>
          <li>
            <Link to="/watch/1009">Breaking Bad</Link>
          </li>
          <li>
            <Link to="/watch/dhur007">Dhurnadhar</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
