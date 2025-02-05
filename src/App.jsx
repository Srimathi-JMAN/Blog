import './App.css';
import BlogsList from './components/BlogsList';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AddBlog from './components/AddBlog';
import { useEffect, useState } from 'react';
import BlogDetails from './components/BlogDetails';
import EditBlog from './components/EditBlog';

function App() {
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem("blogs");
    return savedBlogs ? JSON.parse(savedBlogs) : []; 
  });


  const data = [
    {id:1,title:'My first Blog',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt harum cupiditate minima reiciendis. Accusantium repellendus alias ea sequi blanditiis, aperiam, expedita rem tempore quo distinctio dicta aliquam vel! Deleniti quod cumque reprehenderit, magni dolore et pariatur ad ratione minus optio maxime fuga eum velit accusamus recusandae modi debitis. Molestias inventore eum, modi corporis aspernatur laboriosam exercitationem unde ex velit. Debitis eum facere illum omnis cum, officiis sequi laboriosam vitae ab eligendi corporis molestias non quas est? Aut mollitia debitis asperiores deserunt fugit vel inventore labore corporis necessitatibus consequuntur consectetur facere voluptate enim nisi a molestiae, et eligendi. Amet, officia.',imageUrl:'https://png.pngtree.com/thumb_back/fh260/background/20221122/pngtree-blog-sign-message-blog-photo-image_3225481.jpg',likes:10,views:10},
    
    {id:2,title:'My second Blog',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt harum cupiditate minima reiciendis. Accusantium repellendus alias ea sequi blanditiis, aperiam, expedita rem tempore quo distinctio dicta aliquam vel! Deleniti quod cumque reprehenderit, magni dolore et pariatur ad ratione minus optio maxime fuga eum velit accusamus recusandae modi debitis. Molestias inventore eum, modi corporis aspernatur laboriosam exercitationem unde ex velit. Debitis eum facere illum omnis cum, officiis sequi laboriosam vitae ab eligendi corporis molestias non quas est? Aut mollitia debitis asperiores deserunt fugit vel inventore labore corporis necessitatibus consequuntur consectetur facere voluptate enim nisi a molestiae, et eligendi. Amet, officia.',imageUrl:'https://png.pngtree.com/thumb_back/fh260/background/20221122/pngtree-blog-sign-message-blog-photo-image_3225481.jpg',likes:10,views:10},
    
    {id:3,title:'My third Blog',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt harum cupiditate minima reiciendis. Accusantium repellendus alias ea sequi blanditiis, aperiam, expedita rem tempore quo distinctio dicta aliquam vel! Deleniti quod cumque reprehenderit, magni dolore et pariatur ad ratione minus optio maxime fuga eum velit accusamus recusandae modi debitis. Molestias inventore eum, modi corporis aspernatur laboriosam exercitationem unde ex velit. Debitis eum facere illum omnis cum, officiis sequi laboriosam vitae ab eligendi corporis molestias non quas est? Aut mollitia debitis asperiores deserunt fugit vel inventore labore corporis necessitatibus consequuntur consectetur facere voluptate enim nisi a molestiae, et eligendi. Amet, officia.',imageUrl:'https://png.pngtree.com/thumb_back/fh260/background/20221122/pngtree-blog-sign-message-blog-photo-image_3225481.jpg',likes:10,views:10},
    
    {id:4,title:'My fourth Blog',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt harum cupiditate minima reiciendis. Accusantium repellendus alias ea sequi blanditiis, aperiam, expedita rem tempore quo distinctio dicta aliquam vel! Deleniti quod cumque reprehenderit, magni dolore et pariatur ad ratione minus optio maxime fuga eum velit accusamus recusandae modi debitis. Molestias inventore eum, modi corporis aspernatur laboriosam exercitationem unde ex velit. Debitis eum facere illum omnis cum, officiis sequi laboriosam vitae ab eligendi corporis molestias non quas est? Aut mollitia debitis asperiores deserunt fugit vel inventore labore corporis necessitatibus consequuntur consectetur facere voluptate enim nisi a molestiae, et eligendi. Amet, officia.',imageUrl:'https://png.pngtree.com/thumb_back/fh260/background/20221122/pngtree-blog-sign-message-blog-photo-image_3225481.jpg',likes:10,views:10},
    
    {id:5,title:'My fifth Blog',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt harum cupiditate minima reiciendis. Accusantium repellendus alias ea sequi blanditiis, aperiam, expedita rem tempore quo distinctio dicta aliquam vel! Deleniti quod cumque reprehenderit, magni dolore et pariatur ad ratione minus optio maxime fuga eum velit accusamus recusandae modi debitis. Molestias inventore eum, modi corporis aspernatur laboriosam exercitationem unde ex velit. Debitis eum facere illum omnis cum, officiis sequi laboriosam vitae ab eligendi corporis molestias non quas est? Aut mollitia debitis asperiores deserunt fugit vel inventore labore corporis necessitatibus consequuntur consectetur facere voluptate enim nisi a molestiae, et eligendi. Amet, officia.',imageUrl:'https://png.pngtree.com/thumb_back/fh260/background/20221122/pngtree-blog-sign-message-blog-photo-image_3225481.jpg',likes:10,views:10}]
  
 
  
  const addBlog = (title, content, imageUrl) => {
    const newBlog = {
      id: Date.now(),
      title,
      content,
      imageUrl,
      likes: 0,
      views: 0,
    };
    setBlogs([...blogs, newBlog]);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blogs' element={<BlogsList blogs={blogs} setBlogs={setBlogs}/>}/>
          <Route path='/addblog' element={<AddBlog addBlog={addBlog}/>}/>
          <Route path='/blog/:id' element={<BlogDetails />} />
          {/* <Route path='/editBlog' element={<EditBlog blogs={blogs} setBlogs={setBlogs}/>} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
