import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetails from "../pages/admin/ProductDetails";
import { useSelector } from "react-redux";
import UserProfile from "../pages/user/UserProfile";

const Mainroutes = () => {

  const {userData} = useSelector(state => state.userReducer);
  // console.log(userData);

  return (
    <Routes>
      {/* Common Routes */}
      <Route path="/" element={userData ? <Products /> : <Home />} />
      {/* <Route path="/products" element={<Products />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products/:id" element={<ProductDetails />} />

      {/* Admin Routes */}
      <Route path="/admin/create-product" element={<CreateProduct />} />
      <Route path="/admin/user-profile" element={<UserProfile />} />
    </Routes>
  );
};

export default Mainroutes;
