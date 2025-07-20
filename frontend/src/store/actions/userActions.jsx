import axios from "../../utils/axiosconfig";
import { loaduser, removeuser } from "../reducers/userSlice";

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    // console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    // console.log(data[0]);
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {
    console.log(error);
  }
};

export const asyncLogoutUser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeuser());
    console.log("User logged out!");
  } catch (error) {
    console.log(error);
  }
};

export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loaduser(user));
    else console.log("User Not logged in!");
  } catch (error) {
    console.log(error);
  }
};

export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch("/users/" + id, user);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(asyncCurrentUser())
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const asyncDeleteUser = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/users/" + id);
    // localStorage.removeItem("user");
    dispatch(asyncLogoutUser())
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
