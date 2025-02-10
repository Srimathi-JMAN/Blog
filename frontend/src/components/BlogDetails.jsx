import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [blog,setBlog] =useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const getBlog = async () =>{
      try{
        const response = await axios.get(`http://localhost:5000/blog/${id}`);
        setBlog(response.data.blog);
        console.log(blog);
      }
      catch{
        console.log("Error in getting the Blog!");
      }
      finally{
        setLoading(false);
      }
    }
    console.log('Fetching',id);
    getBlog();
  }, [id]);

  if(loading)
  {
    return <h1 className='text-2xl text-center'>Loading...</h1>
  }

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="mx-auto p-4 border rounded-lg shadow-lg flex flex-col items-center">  
      {blog && blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} className="w-210 h-130 object-cover mb-4" />}
      <h2 className="text-8xl text-center font-bold mb-4">{blog.title}</h2>
      <p className="text-lg mx-10">{blog.content}</p>
      <div className="text-gray-500 text-sm mt-4">
        Likes: {blog.likes} | Views: {blog.views} 
      </div>

      <button onClick={() => {navigate(-1); }} className="bg-gray-500 text-white px-4 py-2 rounded mt-4">
        Back
      </button>
    </div>
  );
};

export default BlogDetails;
