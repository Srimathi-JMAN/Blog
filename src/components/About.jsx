import React from 'react'

const About = () => {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-4xl text-center font-bold mb-4">About Us</h1>

      <div className='flex items-center'>
        <div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-bold">My Blog</span>, a platform where we share insightful articles, latest updates, and engaging stories across various topics. 
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-3">
          Our mission is to create a space where readers can find valuable content, explore different perspectives, and stay informed about the latest trends. We are passionate about delivering high-quality content that educates, inspires, and entertains.
        </p>
        <h2 className="text-2xl font-bold mt-6">Why Choose Us?</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Fresh and engaging content</li>
          <li>Well-researched and insightful articles</li>
          <li>A diverse range of topics covered</li>
          <li>A community-driven platform</li>
        </ul>
        <h2 className="text-2xl font-bold mt-6">Meet Our Team</h2>
        <p className="text-lg text-gray-700 leading-relaxed mt-3">
          We are a group of passionate writers, tech enthusiasts, and storytellers dedicated to bringing you the best content possible. Stay connected with us as we continue to grow and evolve.
        </p>

        <h2 className="text-2xl font-bold mt-6">Stay Connected</h2>
        <p className="text-lg text-gray-700 leading-relaxed mt-3">
          Follow us on our social media channels and subscribe to our newsletter to never miss an update. We’d love to hear from you!
        </p>
      </div>
        
        
        <img className="w-200 h-150 object-cover mb-4 rounded-lg" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjg1Ny0wMjRkLXguanBn.jpg" alt="My Blog" />
      </div>
      

      

      

      

    </div>
  );
}

export default About
