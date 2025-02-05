import React from 'react'
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <div className='bg-black p-10 text-white flex flex-col mt-10 items-center gap-10'>
        <div className='flex justify-around gap-10 w-full'>
            <div className='flex flex-col justify-center items-center'>
                <h1>Categories</h1>
                <ul className='flex flex-col justify-center items-center'>
                    <li>Technology</li>
                    <li>Lifestyle</li>
                    <li>Business & Entrepreneurship</li>
                    <li>Travel</li>
                    <li>Design & Creativity</li>
                    <li>Food & Recipes</li>
                </ul>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl text-white'>Contact Us</h1>
                <form className='flex flex-col justify-center items-center'>
                    <label>Email</label>
                    <input className='px-1 bg-gray-300 rounded-xl text-black' type='text'></input><br/>
                    <label>Feedback</label>
                    <input className='px-1 bg-gray-300 rounded-xl text-black' type='text'></input><br/>
                    <input className='py-1 px-2 bg-gray-300 rounded-full text-black ' type='submit'></input>
                </form>
            </div>

            <div className='flex gap-10 items-center justify-center'>
                <Instagram />
                <Facebook />
                <Mail />

            </div>

        </div>
        <div>
            <p>Copyrights &copy; Blog. All Rights Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
