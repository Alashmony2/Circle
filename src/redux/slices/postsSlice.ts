import { postsSliceIntialState } from "@/interfaces/postsSliceIntialState";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie';


const getAllPosts = createAsyncThunk("posts/getAllPosts",async()=>{
    const {data} = await axios.get("https://linked-posts.routemisr.com/posts?limit=50",{
        headers:{
            token:Cookies.get("token")
        }
    })
    return data.posts
})

const initialState:postsSliceIntialState ={
    posts:[]
}

const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getAllPosts.fulfilled,(state,action)=>{
            state.posts = action.payload
        })
    }
})

export const postReducer = postsSlice.reducer;