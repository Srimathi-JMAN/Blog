import React from 'react'
import LandingPageImage from '../assets/landing_writing_image.jpg'

const LandingPage = () => {
  return (
    <div className='bg-black flex items-center'>
      <img className='h-150 w-screen relative opacity-25' alt='Landing Image' src={LandingPageImage}/>
      <pre className='text-white bold text-6xl absolute mx-20'>Share your Thoughts,<br>
      </br>Stories, Hobbies, <br/>Technology, Subjects etc.<br/>
        as Blogs Here!</pre>
    </div>
  )
}

export default LandingPage
