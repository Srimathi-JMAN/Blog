import React, { useEffect, useState } from 'react'
import {Heart, Eye, Pencil, Trash2} from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogCard = ({blog, deleteBlog, blogs}) => {
  const navigate =useNavigate();
  const [likes,setLike] = useState(blog.likes);
  const [views,setView] =useState(blog.views);

  const addLike = async (id) =>{
    try{
      const response = await axios.patch(`http://localhost:5000/addLike/${id}`);
      setLike(likes+1);
      console.log(response.data.message);
    }
    catch(err){
      console.log('Like not added : ',err);
    }
  }

  const handleReadMore = async(id)=>{
    try{
      const response = await axios.patch(`http://localhost:5000/addView/${id}`);
      setView(views+1);
      navigate(`/blog/${blog._id}`);
      console.log(response.data.message);
    }
    catch(err){
      console.log('Views not added!');
    }
  }
 
  return (
    <div className='flex items-center p-10 shadow-xl m-10 gap-4' >
        <img className='w-70 h-40' src={blog.imageUrl} alt={blog._id}></img>
        <div className='flex flex-col gap-3'>
            <h1 className='text-3xl'>{blog.title}</h1>
            <p>{blog.content?.slice(0,100)}...</p>
            <button
              onClick={() => {handleReadMore(blog._id)} }
              className='w-fit bg-red-200 rounded-full px-2 p-1'
            >
              Read More
            </button>
            <div className='flex gap-5 items-center'>
              <button 
                onClick={() =>{addLike(blog._id);}}
              ><Heart color="black" fill="red"/></button><span>{likes}</span>
              <Eye /><span>{views}</span>
              <button onClick={()=> navigate(`/editBlog/${blog._id}`)}><Pencil /></button>
              <button onClick={()=> deleteBlog(blog._id)}><Trash2 color='red'/></button>
            </div>
        </div>
    </div>
  )
}

export default BlogCard
