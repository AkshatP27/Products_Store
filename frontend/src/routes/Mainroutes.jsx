import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import UnAuthWrapper from "./UnAuthWrapper";

const AuthWrapper = lazy(() => import("./AuthWrapper"));
const Products = lazy(() => import("../pages/Products"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"));
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"));
const UserProfile = lazy(() => import("../pages/user/UserProfile"));
const PageNotFound = lazy(() => import("./AuthWrapper"));
const Cart = lazy(() => import("../pages/PageNotFound"));

const Mainroutes = () => {
  // console.log(userData);

  return (
    <Routes>
      {/* Common Routes */}
      <Route path="/" element={<Products />} />
      {/* <Route path="/products" element={<Products />} /> */}
      <Route
        path="/login"
        element={
          <UnAuthWrapper>
            <Login />
          </UnAuthWrapper>
        }
      />
      <Route
        path="/register"
        element={
          <UnAuthWrapper>
            <Register />
          </UnAuthWrapper>
        }
      />
      <Route path="*" element={<PageNotFound />} />

      {/* Protected Routes */}

      <Route
        path="/products/:id"
        element={
          <AuthWrapper>
            <ProductDetails />
          </AuthWrapper>
        }
      />
      <Route
        path="/cart"
        element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>
        }
      />
      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreateProduct />
          </AuthWrapper>
        }
      />
      <Route
        path="/admin/user-profile"
        element={
          <AuthWrapper>
            <UserProfile />
          </AuthWrapper>
        }
      />
    </Routes>
  );
};

export default Mainroutes;
