import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/autSlice";
import { postReducer } from "./slices/postsSlice";

export const store = configureStore({
    reducer :{
        auth : authReducer,
        posts :postReducer
    }
})