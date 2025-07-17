import axios from "../../utils/axiosconfig";
import { loaduser } from "../reducers/userSlice";

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
    const {data} = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    // console.log(data[0]);
    localStorage.setItem("user", JSON.stringify(data[0]))
    
  } catch (error) {
    console.log(error);
  }
};

export const asyncLogoutUser = (user) => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
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
