import React, { useEffect, useState } from 'react'

import BlogCard from './BlogCard'
import axios from 'axios';

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);

  const getData = async () =>{
    const response = await axios.get('http://localhost:5000/blogs')
    setBlogs(response.data);
  }
  
  useEffect(()=>{
    getData();
  },[blogs]);

  const deleteBlog = async (id) => {
    try{
      const response = await axios.delete(`http://localhost:5000/deleteBlog/${id}`);
      alert(response.data.message);
    }
    catch{
      alert('Error in deleting the blog!');
    }
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };

  if(blogs.length==0)
  {
    return <h1 className='text-3xl text-center m-10'>No Blogs!</h1>
  }

  return (
    <div className='grid grid-cols-2 bg-gray-100'>
        {
          blogs && blogs?.length>0 && ( blogs.map((blog)=>(
            <BlogCard blog={blog} key={blog._id} deleteBlog={deleteBlog} blogs={blogs}/>
          ))
          
        )
        }
    </div>
  )
}

export default BlogsList
