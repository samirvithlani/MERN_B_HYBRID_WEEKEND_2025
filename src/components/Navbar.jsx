import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { theme, settheme } = useContext(ThemeContext);

  const state = useSelector((state) => state);

  const themeHandler = () => {
    if (theme === "light") {
      settheme("dark");
    } else {
      settheme("light");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-3 shadow-md">
        <div className="flex flex-wrap items-center justify-between">
          
          {/* Left Section */}
          <ul className="flex flex-wrap items-center gap-4">
            
            {/* Theme Button */}
            <li>
              <button
                onClick={themeHandler}
                className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 transition"
              >
                {theme === "light" ? "DARK" : "LIGHT"}
              </button>
            </li>

            {/* Links */}
            <li>
              <Link to="/netflixhome" className="hover:text-gray-300">
                Home
              </Link>
            </li>

            <li>
              <Link to="/apidemo1" className="hover:text-gray-300">
                apidemo1
              </Link>
            </li>

            <li>
              <Link to="/apidemo2" className="hover:text-gray-300">
                apidemo2
              </Link>
            </li>

            <li>
              <Link to="/apidemo3" className="hover:text-gray-300">
                apidemo3
              </Link>
            </li>

            <li>
              <Link to="/omdb" className="hover:text-gray-300">
                omdb
              </Link>
            </li>

            <li>
              <Link to="/useEffectDemo" className="hover:text-gray-300">
                useEffectDemo
              </Link>
            </li>

            <li>
              <Link to="/usememo" className="hover:text-gray-300">
                usememo
              </Link>
            </li>

            <li>
              <Link to="/findbomb" className="hover:text-gray-300">
                findbomb
              </Link>
            </li>

            <li>
              <Link to="/books" className="hover:text-gray-300">
                books
              </Link>
            </li>

            <li>
              <Link to="/user/userefdemo" className="hover:text-gray-300">
                userefdemo
              </Link>
            </li>

            <li>
              <Link to="/user/userefdemo2" className="hover:text-gray-300">
                userefdemo2
              </Link>
            </li>
            
            <li>
              <Link to="/user/taiwinddemo1" className="hover:text-gray-300">
                taiwinddemo1
              </Link>
            </li>
            <li>
              <Link to="/user/taiwinddemo2" className="hover:text-gray-300">
                taiwinddemo2
              </Link>
            </li>

            {/* Cart */}
            <li className="ml-4 font-semibold">
              Cart: {state.cart.cart.length}
            </li>
          </ul>
        </div>
      </nav>

      {/* Outlet */}
      <div className="mt-3 px-4">
        <Outlet />
      </div>
    </div>
  );
};