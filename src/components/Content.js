import React from 'react'
import '../index.css';

const Content = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-hero-gif bg-cover bg-center h-screen flex items-center justify-center mx-auto'>
      <h1 className='text-white sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-wide mx-auto'>
        YAZHINI V
      </h1>
      <h3 className='text-white text-xl sm:text-2xl md:text-3xl font-medium'>
        Full Stack Developer
      </h3>
      <div className='flex'>
      <div className='w-10 h-10 mr-4 bg-white rounded-lg mt-10 mr-5'>
        <a href="https://www.linkedin.com/in/yazhini-v-844412263/" target='blank'>
        <img src='https://i.pinimg.com/1200x/39/a5/ae/39a5ae84afcd8cd690f37e65f7d94798.jpg'>
      
      </img></a>

      </div>

      <div className='w-10 h-10 mr-4 bg-white rounded-lg mt-10 mr-5'>
        <a href="mailto:yazhini423@gmail.com?subject=Hello%20Yazhini&body=I%20would%20like%20to%20connect%20with%20you."
        target='blank'
        >
        <img src='https://static.vecteezy.com/system/resources/previews/046/719/190/non_2x/email-icon-glyph-icon-for-your-website-mobile-presentation-and-logo-design-vector.jpg'></img>

        </a>
      </div>

      <div className='w-10 h-10 mr-4 bg-white rounded-lg mt-10 mr-0'>
        <a href="https://github.com/yazhini345" target='blank'>
        <img src='https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png'></img>
        </a>
      </div>
      </div>

      <div className='mt-10 text-white text-xl font-normal border bg-black p-2 rounded-lg'>
        <a href="https://drive.google.com/file/d/1XruLvEKEPIZKzf9d2ij9OzXK7DdQIi1d/view?usp=drive_link" target="_blank" rel="noopener noreferrer">View CV</a>
      </div>
    </div>
  )
}

export default Content;
