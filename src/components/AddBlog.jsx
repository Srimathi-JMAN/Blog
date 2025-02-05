import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBlog = ({addBlog}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl,setImageUrl] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(title.trim() && content.trim())
    {
      addBlog(title,content,imageUrl);
      setTitle("");
      setContent("");
      setImageUrl("");
      navigate('/blogs');
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Add / Edit Blog</h2>
        <form onSubmit={handleSubmit} className='flex flex-col items-center shadow-md p-10'>
          <input type="hidden" id="blogId"/>
          <div class="mb-4">
            <label className="block text-gray-700">Title</label>
            <input type="text" id="blogTitle" className="w-full p-2 border rounded" placeholder="Enter blog title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
          </div>
          <div class="mb-4">
            <label className="block text-gray-700">Content</label>
            <textarea id="blogContent" className="w-full p-2 border rounded" rows="4" placeholder="Enter blog content" value={content} onChange={(e)=>setContent(e.target.value)} required></textarea>
          </div>
          

          <div class="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input type="text" placeholder="Enter Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full p-2 border rounded"/>
            {imageUrl && <img src={imageUrl} alt="Preview" className="w-full h-40 object-cover mb-2" />}
            
          </div>
          

          <button type="submit" className="bg-black  text-white px-4 py-2 rounded">Save Blog</button>
        </form>
      </div>
  )
}

export default AddBlog
