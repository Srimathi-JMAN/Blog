import './App.css';
import BlogsList from './components/BlogsList';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AddBlog from './components/AddBlog';
import BlogDetails from './components/BlogDetails';
import EditBlog from './components/EditBlog';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <BrowserRouter>
        <NavBar/>
        <div className="flex-grow bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<BlogsList />} />
            <Route path="/addBlog" element={<AddBlog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/editBlog/:id" element={<EditBlog />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
