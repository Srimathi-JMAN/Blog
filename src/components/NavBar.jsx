import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='flex justify-between items-center p-5 bg-black text-white'>

      <h1 className='text-6xl text-bold font-serif'>Blog</h1>
      <div>
        <ul className='flex gap-8'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/blogs'><li>Blogs</li></Link>
            <Link to='/addblog'><li>Add Blogs</li></Link>
        </ul>
      </div>

    </div>
  )
}

export default NavBar
