import React from 'react'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import google from '../assets/google.png'
import linkedin from '../assets/linkedin.png'

function AboutUs() {
    return (
        <div>
            <div className='min-h-50 pt-20 px-5 flex flex-col gap-5'>
                
                <div>
                    <img src={logo} alt="LOGO" />
                </div>
                <div>
                    GRKVC commenced its Vocational & Professional Skills business in 2015 and over the years has trained more than 50000 students till 2026.
                </div>

                <div className='flex items-center gap-1.5'>

                    <div className='h-10 w-10 bg-gray-900 hover:bg-[#F36371] duration-500 text-white flex items-center justify-center transition-all cursor-pointer'>
                        <img src={facebook} alt="" width={18}/>
                    </div>

                    <div className='h-10 w-10 bg-gray-900 hover:bg-[#F36371] duration-500 text-white flex items-center justify-center transition-all cursor-pointer'>
                        <img src={instagram} alt="" width={18}/>
                    </div>

                    <div className='h-10 w-10 bg-gray-900 hover:bg-[#F36371] duration-500 text-white flex items-center justify-center transition-all cursor-pointer'>
                        <img src={twitter} alt="" width={18}/>
                    </div>

                    <div className='h-10 w-10 bg-gray-900 hover:bg-[#F36371] duration-500 text-white flex items-center justify-center transition-all cursor-pointer'>
                        <img src={google} alt="" width={18}/>
                    </div>

                    <div className='h-10 w-10 bg-gray-900 hover:bg-[#F36371] duration-500 text-white flex items-center justify-center transition-all cursor-pointer'>
                        <img src={linkedin} alt="" width={18}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs
