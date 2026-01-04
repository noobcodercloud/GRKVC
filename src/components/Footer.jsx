import React from 'react'
import Gallery from './Gallery.jsx'
import ArrowRight from '../assets/arrow-right.png'

const MenuList = [
  'About Us',
  'Our News',
  'Privacy Policy',
  'Terms & Condition',
  'Contact Us'
]

const LatestNewsList = [
  { title: 'INTERNATIONAL ACCREDITATIONS', date: '2023-02-14' },
  { title: 'NANNY CARE COURSE', date: '2023-02-07' },
]

function Footer() {

  const Menu = MenuList.map((e) => {
    return (
      <div key={e} className='flex gap-3 group items-center cursor-pointer'>
        <div className='group-hover:text-[#F36371] transition-all duration-300 flex items-center justify-center'>
          <img src={ArrowRight} alt="" width={19}/>
        </div>
        <div className='group-hover:text-[#F36371] transition-all duration-500'>
          {e}
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className='min-h-100 bg-gray-950 flex flex-col sm:flex-row items-center justify-center'>
        <div className='text-white h-full w-full'>
          <div className='p-5'>
            {Menu}
          </div>
        </div>
        <div className='w-full sm:w-fit sm:px-10 grid place-items-center bg-gray-900'>
          <Gallery />
        </div>
      </div>
      <div >
        
      </div>
    </div>
  )
}

export default Footer