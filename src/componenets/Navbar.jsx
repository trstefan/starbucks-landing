import React from "react";
import logo from "../assets/logo.png";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav__left__side">
        <div>
          <img src={logo} alt="" width={50} height={50} />
        </div>
        <ul>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Rewards</a>
          </li>
          <li>
            <a href="">Gift Cards</a>
          </li>
        </ul>
      </div>
      <div className="nav__right__side">
        <a href="">Find a store</a>
        <button>Sign In</button>
        <button>Join Now</button>
      </div>
    </nav>
  );
};
