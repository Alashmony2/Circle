'use client'
import { log } from 'console';
import React from 'react'
import { useSelector } from 'react-redux'

export default function Posts() {
  const {posts} = useSelector((state:any)=>state.posts);
  console.log(posts);
  
  return <div>Posts</div>
  
}
