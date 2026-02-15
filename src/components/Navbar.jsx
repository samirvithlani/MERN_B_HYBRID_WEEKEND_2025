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
            {/* <li class="nav-item active">
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
            <li class="nav-item active">
              <Link class="nav-link" to="/inputdemo1">
                inputdemo1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/inputdemo2">
                inputdemo2
              </Link>
            </li>
            
            <li class="nav-item active">
              <Link class="nav-link" to="/dropdown">
                dropdown
              </Link>
            </li> */}
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo1">
                formdemo1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo2">
                formdemo2
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo3">
                formdemo3
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo4">
                formdemo4
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo5">
                formdemo5
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo6">
                formdemo6
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/apidemo1">
                apidemo1
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
