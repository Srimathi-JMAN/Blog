import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditBlog = () => {
  const {id} = useParams();
  const [blog,setBlog] =useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl,setImageUrl] = useState("")
  const navigate = useNavigate();


  useEffect(() => {
    const getBlog = async () =>{
      try{
        const response = await axios.get(`http://localhost:5000/blog/${id}`);
        console.log(response.data.blog);
        setBlog(response.data.blog);
      }
      catch{
        console.log("Error in getting the Blog!");
      }
    }
    console.log('Fetching',id);
    getBlog();
  }, [id]);

  useEffect(() => {
    if (blog) {
      setTitle(blog.title || "");
      setContent(blog.content || "");
      setImageUrl(blog.imageUrl || "");
    }
  }, [blog]);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(title.trim() && content.trim())
    {
      try{
        const response = await axios.put(`http://localhost:5000/editBlog/${id}`,{
          title,
          content,
          imageUrl,
          likes:blog.likes,
          views:blog.views,
        });
        console.log(response.data.message);
      }
      catch(err){
        console.log("Error posting data!",err);
      }
      finally{
        setTitle("");
        setContent("");
        setImageUrl("");
        navigate('/blogs');
      } 
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Edit Blog</h2>
        <form onSubmit={handleSubmit} className='flex flex-col items-center shadow-md p-10'>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input type="text" id="blogTitle" className="w-full p-2 border rounded" placeholder="Enter blog title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Content</label>
            <textarea id="blogContent" className="w-full p-2 border rounded" rows="4" placeholder="Enter blog content" value={content} onChange={(e)=>setContent(e.target.value)} required></textarea>
          </div>
          

          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input type="text" placeholder="Enter Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full p-2 border rounded"/>
            {imageUrl && <img src={imageUrl} alt="Preview" className="w-full h-40 object-cover mb-2" />}
          </div>
          
          <button type="submit" className="bg-black  text-white px-4 py-2 rounded">Update Blog</button>
        </form>
      </div>
  )
}

export default EditBlog
