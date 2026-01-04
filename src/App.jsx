import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CoursesList from './components/CoursesList.jsx'
import Footer from './components/Footer.jsx'
import Searchbar from './components/Searchbar.jsx'
import ContactUs from './components/ContactUs.jsx'
import './App.css'

function App() {

  return (
    <>
      <div className='font-outfit'>
        <Navbar />
        <Hero />
        <Searchbar />
        <CoursesList />
        <ContactUs />
        <Footer />
        <div className='bg-[#F9BE4D] text-center text-sm'>
          Developed with ❤️ by <a href="https://github.com/noobcodercloud" target='_blank' className='text-blue-800'>Kirat Dhiman</a>
        </div>
      </div>
    </>
  )
}

export default App