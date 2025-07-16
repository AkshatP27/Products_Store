import axios from "../utils/axiosconfig";
import { loadUser } from "./userSlice";

export const asyncGetUsers = () => async (dispatch, getState) => {
    try {
        console.log("Current State >>>>> ",getState());

        const res = await axios.get("/users");
        // console.log(res);
        dispatch(loadUser(res.data))
    } catch (error) {
        console.log(error);
        
    }   
}