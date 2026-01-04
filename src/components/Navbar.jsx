import React, { useState, useRef, useEffect } from 'react'
import Information from '../assets/information.png'

function Navbar() {
  const InfoRef = useRef(null)
  const [ShowLoginMenu, setShowLoginMenu] = useState(false)
  const [ShowInfoMenu, setShowInfoMenu] = useState(false)

  const clickOnLogin = () => {
    setShowLoginMenu(!ShowLoginMenu)
  }
  const clickOnInfo = () => {
    setShowInfoMenu(!ShowInfoMenu)
  }

  useEffect(() => {
    function ClickOutSide (event) {
      if (InfoRef.current && !InfoRef.current.contains(event.target)) {
        setShowInfoMenu(false)
        setShowLoginMenu(false)
      }
    }

    document.addEventListener("mousedown", ClickOutSide)
    
    return () => {
      document.removeEventListener("mousedown", ClickOutSide)
    }
  }, [])

  return (
    <div>
      <div className='w-full min-h-15 bg-gray-800 py-3'>
        <div className='flex items-center h-full px-5'>

          <div className='flex items-center justify-start w-full relative'>
            <div className='bg-gray-900 p-2 rounded-md border-2 border-transparent transition-all hover:bg-gray-900 hover:border-gray-950 cursor-pointer fixed z-50' ref={InfoRef} onClick={clickOnInfo}>
              <img src={Information} alt="" width={26} className='invert relative' />
              {
                ShowInfoMenu &&
                <div className='rounded-xl absolute top-7.5 left-0 shadow-[0_6px_20px_rgba(0,0,0,0.9)]'>
                  <div className='border border-black text-[14px] w-40 h-10 bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center rounded-t-xl cursor-pointer border-b-0 box-border'>
                    Help & Support
                  </div>
                  <div className='border border-black text-[14px] w-40 h-10 bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center rounded-b-xl cursor-pointer box-border'>
                    FAQ
                  </div>
                </div>
              }
            </div>
          </div>

          <div className='flex items-center justify-end w-full relative'>
            <div className='bg-gray-900 text-white hover:bg-gray-900 py-2 px-10 rounded-md transition-all border-2 border-transparent hover:border-gray-950 cursor-pointer' ref={InfoRef} onClick={clickOnLogin}>
              <span className='relative'>Login</span>
              {
                ShowLoginMenu &&
                <div className='rounded-xl absolute top-7.5 right-0 shadow-[0_6px_20px_rgba(0,0,0,0.9)]'>
                  <div className='border border-black text-[14px] w-40 h-10 bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center rounded-t-xl cursor-pointer border-b-0 box-border'>
                    Student Login
                  </div>
                  <div className='border border-black text-[14px] w-40 h-10 bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center rounded-b-xl cursor-pointer box-border'>
                    Branch Login
                  </div>
                </div>
              }
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar