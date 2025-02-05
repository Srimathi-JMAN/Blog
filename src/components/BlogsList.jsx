import React, { useEffect, useState } from 'react'

import BlogCard from './BlogCard'

const BlogsList = ({blogs , setBlogs}) => {

  //const [blogs,setBlogs] = useState(blogs);

  // async function getBlogs(){
  //   const response =await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts`);
  //   const data = await response.json();
  //   setBlogs(data.blogs);
  //   console.log(data.blogs);
  // }

  // useEffect(()=>{
  //   getBlogs();
  // },[])

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);
  
  const deleteBlog = (id) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className='grid grid-cols-2 bg-gray-100'>
        {
          blogs && blogs?.length>0 && ( blogs.map((blog)=>(
            <BlogCard blog={blog} key={blog.id} deleteBlog={deleteBlog} setBlogs={setBlogs}/>
          ))
          
        )
        }
    </div>
  )
}

export default BlogsList
