import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <a class="navbar-brand" href="#">
        <img src="media/images/logo.svg" style={{ width: "30%" }}></img>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse p-2" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link active" to="/">
              Signup <span class="sr-only">(current)</span>
              </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/about">
              About
              </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/product">
              Products
              </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/pricing">
              Pricing
              </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/support">
              Support </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;