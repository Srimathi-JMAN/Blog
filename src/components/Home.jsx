import React from 'react'
import LandingPage from './LandingPage'
import LandingPageImage from '../assets/landing_writing_image.jpg'
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const Home = () => {
  return (
    <>
      <LandingPage/>
      <div>
        <div className='p-10 flex items-center gap-7'>
            <div className='flex flex-col gap-5'>
              <h1 className='text-3xl font-bold'>Blog Categories</h1>
              <p className='text-xl'>Welcome to our blog! We have organized our content into several categories to help you easily find the topics you're interested in. Whether you're looking for the latest trends, helpful tutorials, or inspiring stories, we’ve got you covered. Here are the main categories of our blog:</p>
            </div>
        </div>

        <div className='mx-60 flex flex-col gap-8'>
        <div className='shadow p-10 flex  items-center gap-7 overflow-auto'>
              <img src='https://th.bing.com/th/id/R.6fd3b2549cf1f0bda36b71c42e8d3cd7?rik=L%2fCYIiqulbxToQ&riu=http%3a%2f%2fusdailyreview.com%2fwp-content%2fuploads%2f2014%2f08%2ftechnology.jpg&ehk=dzaRzyft3FDapcPTuIGU6nF%2b2zznUv5dDXCjidMhVMA%3d&risl=&pid=ImgRaw&r=0' className='h-80 w-200 object-center'></img>
              <div className='border-l-2 flex flex-col gap-5 p-15'>
                <h1 className='text-2xl'>Technology</h1>
                <p className='text-lg '>The world of technology is constantly evolving, and our Technology category brings you the latest developments and in-depth analysis of emerging tech trends. Whether you’re into gadgets, software development, artificial intelligence, or the future of digital innovation, this section will keep you informed about the most exciting tech topics. Stay ahead of the curve and dive into the future of technology.</p>
                
              </div>
          </div>

          <div className='shadow p-10 flex  items-center gap-7 overflow-auto'>
              <img src='https://th.bing.com/th/id/OIP.MPEkcevn3LG1o0ZVbC8sYgHaE7?rs=1&pid=ImgDetMain' className='h-80 w-200 object-center'></img>
              <div className='border-l-2 flex flex-col gap-5 p-15'>
                <h1 className='text-2xl'>Lifestyle</h1>
                <p className='text-lg '>Our Lifestyle category is all about living your best life! From managing work-life balance to practicing mindfulness, and improving mental health, this section offers practical advice and inspiration to help you feel your best. You'll find content that makes it easier to achieve your personal goals, whether they involve physical fitness, wellness routines, or finding inner peace.</p>
                
              </div>
          </div>

          <div className='shadow p-10 flex  items-center gap-7 overflow-auto'>
              <img src='https://nextluxury.com/wp-content/uploads/How-To-Be-A-Successful-Businessman-%E2%80%93-50-Rules-Of-Entrepreneurship-Only-The-Rich-And-Ruthless-Know.jpg' className='h-80 w-200 object-center'></img>
              <div className='border-l-2 flex flex-col gap-5 p-15'>
                <h1 className='text-2xl'>Business & Entrepreneurship</h1>
                <p className='text-lg '>Our Business & Entrepreneurship section is tailored for the go-getters, innovators, and entrepreneurs. If you’re thinking about starting your own business or want to optimize your current company, you’ll find expert advice, tools, and success stories here. This section is filled with actionable insights that will help you grow your business, improve your leadership skills, and master your entrepreneurial journey.</p>
                
              </div>
          </div>

          <div className='shadow p-10 flex  items-center gap-7 overflow-auto'>
              <img src='https://th.bing.com/th/id/OIP.GR2eo-RzWbJ_wvhjphaYswHaE8?rs=1&pid=ImgDetMain' className='h-80 w-200 object-center'></img>
              <div className='border-l-2 flex flex-col gap-5 p-15'>
                <h1 className='text-2xl'>Travel</h1>
                <p className='text-lg '>Are you an explorer at heart? The Travel category offers inspiration for your next journey. Whether you prefer relaxing beach vacations or adrenaline-pumping adventures, this section has something for every traveler. We bring you destination guides, tips on budget travel, and insights into local cultures and cuisines.</p>
                
              </div>
          </div>

          <div className='shadow p-10 flex  items-center gap-7 overflow-auto'>
              <img src='https://th.bing.com/th/id/OIP.sRKm2m15XvP32y5xGL65lAHaEJ?rs=1&pid=ImgDetMain' className='h-80 w-200 object-center'></img>
              <div className='border-l-2 flex flex-col gap-5 p-15'>
                <h1 className='text-2xl'>Design & Creativity</h1>
                <p className='text-lg '>Whether you’re a graphic designer, photographer, or creative soul, our Design & Creativity category is a hub for all things visual. Explore design trends, tutorials, and inspiration to spark your creativity. Whether you're a professional designer or just starting out, you’ll find resources to improve your skills and stay on top of the latest design innovations.</p>
                
              </div>
          </div>

          <div className='shadow p-10 flex  items-center gap-7 overflow-auto'>
              <img src='https://th.bing.com/th/id/OIP.LLbE_Z1vHd0MYzUHLcHFqAHaHa?rs=1&pid=ImgDetMain' className='h-80 w-200 object-center'></img>
              <div className='border-l-2 flex flex-col gap-5 p-15'>
                <h1 className='text-2xl'>Food & Recipes</h1>
                <p className='text-lg '>If you love food as much as we do, our Food & Recipes category is a treat for your taste buds! Whether you’re a home cook or a professional chef, you’ll find recipes, cooking hacks, and food culture inspiration. This section is perfect for anyone looking to expand their culinary repertoire or get inspired for their next meal.</p>
                
              </div>
          </div>

          <div className='shadow p-10 flex  items-center gap-7 overflow-auto'>
              <img src='https://th.bing.com/th/id/OIP.iRt7bpuacg0Rl9e_doqdGAHaE7?rs=1&pid=ImgDetMain' className='h-80 w-200 object-center'></img>
              <div className='border-l-2 flex flex-col gap-5 p-15'>
                <h1 className='text-2xl'>Entertainment</h1>
                <p className='text-lg '>In the Entertainment category, we keep you updated on the latest trends in movies, TV shows, music, gaming, and pop culture. From in-depth reviews to discussions about your favorite celebrities and the latest blockbusters, this section is perfect for anyone who loves staying updated on entertainment news.</p>
                
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
