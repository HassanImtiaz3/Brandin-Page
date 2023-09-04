import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="Logo" />
        </div>

        <ul className="myNavList">
          <li>Menu</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="navBtn">Login</button>
      </nav>
    </>
  );
};

export default Navbar;
