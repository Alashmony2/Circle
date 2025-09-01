"use client";
import { PostI } from "@/interfaces/Post";
import { getAllPosts } from "@/redux/slices/postsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Posts() {
  const dispatch = useDispatch<any>()
  const { posts }: { posts: PostI[] } = useSelector(
    (state: any) => state.posts
  );
  console.log(posts);
  useEffect(()=>{
    dispatch(getAllPosts())
  },[])

  return <div>Posts</div>;
}
