import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const EditBlog = ({blogs,setBlogs}) => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const blog = location.state?.blog;
  // console.log(blog);
  
  // const editBlog = blogs.find((b)=>{
  //   if(b.id === blog.id)
  //   {
  //     b.title=title;
  //     b.
  //   }
  // })

  // console.log(editBlog)

  // const [title, setTitle] = useState(blog.title);
  // const [content, setContent] = useState(blog.content);
  // const [imageUrl,setImageUrl] = useState(blog.imageUrl)
  

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   editBlog.title=title;
  //   editBlog.content=setContent;
  //   editBlog.imageUrl=imageUrl;
  //   setBlogs([...blogs,editBlog]);
  //   setTitle("");
  //   setContent("");
  //   setImageUrl("");
  //   navigate('/blogs', )

  // }

  return (
    <div className="h-screen flex flex-col justify-center items-center p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Edit Blog</h2>
        <form onSubmit={handleSubmit} className='flex flex-col items-center shadow-md p-10'>
          <input type="hidden" id="blogId"/>
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
          

          <button type="submit" className="bg-black  text-white px-4 py-2 rounded">Save Blog</button>
        </form>
      </div>
  )
}

export default EditBlog
