import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthWrapper = (props) => {

  const { userData } = useSelector((state) => state.userReducer);

  return userData ? props.children : <Navigate to="/login" /> ;
};

export default AuthWrapper;
