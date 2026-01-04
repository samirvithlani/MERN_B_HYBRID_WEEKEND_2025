import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
                Home
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixmovies">
                Movies
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/useStateDemo">
                useStateDemo
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/useStateDemo2">
                useStateDemo2
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/useStateDemo3">
                useStateDemo3
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/products">
                products
              </Link>
            </li>
          
          </ul>
        </div>
      </nav>
    </div>
  );
};
