import React from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="nav-box">
      <img src={logo} alt="musica" className="logo" />
      <h2 className="heading">
        Enjoy & Download Your Favourite Music For{" "}
        <span style={{ color: "green" }}>FREE :)</span>
      </h2>
    </div>
  );
};

export default Navbar;
