import React, { useState } from 'react'
import {Heart, Eye, Pencil, Trash2} from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog, deleteBlog}) => {

  const navigate =useNavigate();
  const [likes,setLike] = useState(blog.likes);
 
  
  console.log(blog.imageUrl);
  return (
    <div className='flex items-center p-10 shadow-xl m-10 gap-4' >
        <img className='w-70 h-40' src={blog.imageUrl} alt={blog.id}></img>
        <div className='flex flex-col gap-3'>
            <h1 className='text-3xl'>{blog.title}</h1>
            {/* <p>{blog.content?.slice(0,100)}...</p> */}
            <button
              onClick={() =>{ blog.views+=1; navigate(`/blog/${blog.id}`, { state: { blog } });}}
              className='w-fit bg-red-200 rounded-full px-2 p-1'
            >
              Read More
            </button>
            <div className='flex gap-5 items-center'>
              <button 
                onClick={() =>{ setLike((like)=>like+1); blog.likes+=1;}}
              ><Heart color="black" fill="red"/></button><span>{blog.likes}</span>
              <Eye /><span>{blog.views}</span>
              {/* <button onClick={()=> navigate(`/editBlog`, { state : { blog } })}><Pencil /></button> */}
             
              <button onClick={()=> deleteBlog(blog.id)}><Trash2 color='red'/></button>
            
            </div>
        </div>
    </div>
  )
}

export default BlogCard
