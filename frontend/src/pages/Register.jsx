import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = [];
    dispatch(asyncRegisterUser(user));
    navigate("/login")
    // console.log(user);
  };

  return (
    <form
      onSubmit={handleSubmit(RegisterHandler)}
      className="flex flex-col items-start w-1/2"
    >
      <input
        {...register("username")}
        className="mb-7 outline-0 border-b p-5 text-4xl"
        type="text"
        placeholder="John-Doe"
      />
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
        Register user
      </button>

      <p className="mt-7">
        Already have an account...!?{" "}
        <Link to="/login" className="text-blue-400">
          Login Here!
        </Link>
      </p>
    </form>
  );
};

export default Register;
