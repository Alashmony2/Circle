import { AutSliceIntialState } from "@/interfaces/authSliceIntialState";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState: AutSliceIntialState = {
    isLoggedin : !!Cookies.get("token")
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUserIsLoggedIn:(state,action) => {state.isLoggedin = action.payload}
    }
})

export const authReducer = authSlice.reducer;
export const {setUserIsLoggedIn} = authSlice.actions;