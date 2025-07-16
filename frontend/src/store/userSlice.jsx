import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // "REDUCERS" are for 'SYNC Actions'; Not for API Calls...!

        loadUser: (state, action) => {    //SYNC Actions
            state.data = action.payload;
            console.log(action);     
            //Will not show anything in 'console' if it's 'called' like a function because it's not a function; it's an "ACTION" so it's need to be 'dispatch'
            
        },

        // "loadUser" is like a bridge that brings data from the UI through API calling, transferred to 'action', then transferred to 'state' and then to "initialState".
        // This is how we'll also get products data, cart data, etc. that will be stored in their respective 'slices' and the "created/updated/deleted" data will be stored in "store".
    },
})

export const {loadUser} = userSlice.actions;

export default userSlice.reducer