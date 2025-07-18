import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncLogoutUser } from "../store/actions/userActions";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogOutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/");
  };

  return (
    <nav className="mb-10 flex justify-center items-center gap-x-5 p-7">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>

      {user && user?.isAdmin && (
        <NavLink to="/admin/create-product">Create Product</NavLink>
      )}

      {user ? (
        <>
          {/* <NavLink to="/admin/create-product">Create Product</NavLink> */}
          <button
            className="cursor-pointer font-bold text-lg text-gray-950 bg-gray-50 py-2 px-4 rounded-xl"
            onClick={LogOutHandler}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink
            to="/login"
            className="cursor-pointer font-bold text-lg text-gray-950 bg-gray-50 py-2 px-4 rounded-xl"
          >
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
