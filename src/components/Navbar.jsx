import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { theme, settheme } = useContext(ThemeContext);
  console.log("theme", theme);

  const state = useSelector((state)=>state) //store..
  //console.log("state obj",state.cart) //state.reducerName
  console.log("state obj",state.cart.cart) //state.reducerName.objName

  const themeHandler = () => {
    //update useSatte
    if (theme == "light") {
      settheme("dark");
    } else {
      settheme("light");
    }
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              {/* <button onClick={()=>{themeHandler()}}>CHANGE THEME</button> */}
              <button
                onClick={() => {
                  themeHandler();
                }}
              >
                {theme == "light" ? "DARK" : "LIGHT"}
              </button>
            </li>
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
            {/* <li class="nav-item active">
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
            </li> */}
            <li class="nav-item active">
              <Link class="nav-link" to="/apidemo1">
                apidemo1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/apidemo2">
                apidemo2
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/apidemo3">
                apidemo3
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/omdb">
                omdb
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/useEffectDemo">
                useEffectDemo
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/usememo">
                usememo
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/findbomb">
                findbomb
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/books">
                books
              </Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/user/userefdemo">
                userefdemo
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/user/userefdemo2">
                userefdemo2
              </Link>
            </li>
            <li class="nav-item active">
              Cart : {state.cart.cart.length}
            </li>
          </ul>
        </div>
      </nav>
      <div style={{marginTop:"10px"}}>
        {/* //out let is useed for load children component */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};
