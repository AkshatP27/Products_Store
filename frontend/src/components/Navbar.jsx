import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-10 flex justify-center items-center gap-x-5 p-7">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink
        to="/login"
        className="font-bold text-lg text-gray-950 bg-gray-50 py-2 px-4 rounded-xl"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
