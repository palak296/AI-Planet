import React from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/AI-Planet-Logo.png";
const Navbar = () => {
  return (
    <div className=" h-[64px] bg-white w-full pt-3">
      <Link to="/">
        
        <img className=" ml-44" src={Logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Navbar;
