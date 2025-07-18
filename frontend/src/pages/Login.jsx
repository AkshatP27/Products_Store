import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncLoginUser } from "../store/actions/userActions";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const LoginHandler = (user) => {
    dispatch(asyncLoginUser(user));
    navigate("/products");
  };

  return (
    <form
      onSubmit={handleSubmit(LoginHandler)}
      className="flex flex-col items-start w-1/2"
    >
      <input
        {...register("email")}
        className="mb-7 outline-0 border-b p-5 text-4xl"
        type="email"
        placeholder="john@doe.com"
      />
      <input
        {...register("password")}
        className="mb-7 outline-0 border-b p-5 text-4xl"
        type="password"
        placeholder="*******"
      />
      <button className="mt-7 bg-gray-200 text-gray-900 py-3 px-5 font-bold text-lg rounded-md">
        Login user
      </button>

      <p className="mt-7">
        Don't have an account...!?{" "}
        <Link to="/register" className="text-blue-400">
          Register Here!
        </Link>
      </p>
    </form>
  );
};

export default Login;
