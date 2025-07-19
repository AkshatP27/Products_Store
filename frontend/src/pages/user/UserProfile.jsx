import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  asyncDeleteUser,
  asyncLogoutUser,
  asyncUpdateUser,
} from "../../store/actions/userActions";

const UserProfile = () => {
  const {
    userReducer: { userData },
  } = useSelector((state) => state);

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      username: userData?.username,
      email: userData?.email,
      password: userData?.password,
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UpdateUserProfileHandler = (user) => {
    dispatch(asyncUpdateUser(userData.id, user));
  };
  const DeleteUserProfileHandler = () => {
    dispatch(asyncDeleteUser(userData.id));
    navigate("/login");
  };
  const LogOutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/login");
  };

  return userData ? (
    <div>
      <form
        onSubmit={handleSubmit(UpdateUserProfileHandler)}
        className="flex flex-col items-start mt-18"
      >
        <input
          {...register("username")}
          className="mb-7 outline-0 border-b p-5 text-4xl"
          type="text"
          placeholder="Username"
        />
        <input
          {...register("email")}
          className="mb-7 outline-0 border-b p-5 text-4xl"
          type="text"
          placeholder="User Email"
        />
        <input
          {...register("password")}
          className="mb-7 outline-0 border-b p-5 text-4xl"
          type="password"
          placeholder="******"
        />
        <button className="mt-7 bg-gray-200 text-gray-900 py-3 px-5 font-bold text-lg rounded-md">
          Update User Details
        </button>
        <button
          type="button"
            onClick={LogOutHandler}
          className="mt-7 bg-red-400 text-gray-900 py-3 px-5 font-bold text-lg rounded-md"
        >
          Log Out User
        </button>
        <button
          type="button"
            onClick={DeleteUserProfileHandler}
          className="mt-7 bg-red-500 text-gray-900 py-3 px-5 font-bold text-lg rounded-md"
        >
          Delete User
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default UserProfile;
