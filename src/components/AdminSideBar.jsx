import React from "react";
import { Link, Outlet } from "react-router-dom";

export const AdminSideBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-primary bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/admin/apidemo1">
                API DEMO 1
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{marginTop:"10px"}}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
