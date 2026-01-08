import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

function ContactUs() {

  const [submitBtnVal, setsubmitBtnVal] = useState('Submit')
  const [isSubmittedManual, setisSubmittedManual] = useState(false)
  const submitBtnRef = useRef(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    console.log("Sending data:", data); 

    const res = await fetch(`${import.meta.env.VITE_API_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    console.log("Response status:", res.status); 
    const dt = await res.text();
    console.log("Response body:", dt); 

    setsubmitBtnVal("Submitted!")
    setisSubmittedManual(true)
  }
  const onError = (e_) => console.log(e_)

  return (
    <div className='flex items-center justify-center mt-5 mb-15'>
      <div className='border border-gray-400 m-4 rounded-md md:w-[80%] bg-gray-100 min-h-10'>

        <div className='px-7 pt-5 text-4xl font-bold text-orange-500'>
          Contact Us
        </div>

        <div className='flex flex-col sm:justify-center relative'>
          <form onSubmit={handleSubmit(onSubmit, onError)} className='relative'>

            <div
              style={{
                opacity: isSubmitting ? '50%' : '100%'
              }}
              className='flex flex-col sm:justify-center sm:items-center p-10 gap-1'
            >

              <div className='focus-within:bg-gray-200 p-2 rounded transition-all duration-500 flex flex-col sm:flex-row sm:w-[70%] w-full sm:items-center sm:justify-between gap-1 relative'>
                <div>Full Name</div>
                <input
                  placeholder="Full Name"
                  {...register("FullName", { required: true })}
                  className='border sm:w-[70%] w-full px-3 sm:px-10 py-2 rounded'
                />
                {errors.FullName && <span className='text-red-600 absolute top-17 sm:top-10 right-0 border border-red-400 bg-red-400/30 rounded-md px-2 backdrop-filter backdrop-blur'>This field is required</span>}
              </div>

              <div className='focus-within:bg-gray-200 p-2 rounded transition-all duration-500 flex flex-col sm:flex-row sm:w-[70%] w-full sm:items-center sm:justify-between gap-1 relative'>
                <div className=''>Mobile Number</div>
                <input
                  type='tel'
                  placeholder="Mobile Number"
                  {...register("MobileNumber", { required: true })}
                  className='border px-3 sm:px-10 py-2 w-full sm:w-[70%] rounded'
                />
                {errors.MobileNumber && <span className='text-red-600 absolute top-17 sm:top-10 right-0 border border-red-400 bg-red-400/30 rounded-md px-2 backdrop-filter backdrop-blur'>This field is required</span>}
              </div>

              <div className='focus-within:bg-gray-200 p-2 rounded transition-all duration-500 flex flex-col sm:flex-row sm:w-[70%] w-full sm:items-center sm:justify-between gap-1 relative'>
                <div>E-mail</div>
                <input
                  type='email'
                  placeholder="eMail"
                  {...register("eMail", { required: true })}
                  className='border px-3 sm:px-10 py-2 w-full sm:w-[70%] rounded'
                />
                {errors.eMail && <span className='text-red-600 absolute top-17 sm:top-10 right-0 border border-red-400 bg-red-400/30 rounded-md px-2 backdrop-filter backdrop-blur'>This field is required</span>}
              </div>

              <div className='focus-within:bg-gray-200 p-2 rounded transition-all duration-500 flex flex-col sm:flex-row sm:w-[70%] w-full sm:items-center sm:justify-between gap-1 relative'>
                <div>Your Course</div>
                <input
                  type='text'
                  placeholder="Your Course"
                  {...register("CourseName", { required: true })}
                  className='border px-3 sm:px-10 py-2 w-full sm:w-[70%] rounded'
                />
                {errors.CourseName && <span className='text-red-600 absolute top-17 sm:top-10 right-0 border border-red-400 bg-red-400/30 rounded-md px-2 backdrop-filter backdrop-blur'>This field is required</span>}
              </div>

              <div className='focus-within:bg-gray-200 p-2 rounded transition-all duration-500 flex flex-col sm:flex-row sm:w-[70%] w-full sm:justify-between gap-1 mb-10 '>
                <div>Your Query</div>
                <textarea
                  name="Query"
                  className='border px-3 sm:px-10 py-2 w-full resize-none sm:w-[70%] wrap-break-word textAreaScrollBar rounded'
                  placeholder='Your Query'
                  {...register("UserQuery")}
                  style={{ height: 'auto', minHeight: '20px', maxHeight: '150px' }}
                  onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}></textarea>
                {errors.UserQuery && <span className='text-red-600 absolute top-17 sm:top-10 right-0 border border-red-400 bg-red-400/30 rounded-md px-2 backdrop-filter backdrop-blur'>This field is required</span>}
              </div>

              <div className='sm:w-[70%]'
                style={{ opacity: isSubmitting ? '50%' : '100%' }}
              >
                <input
                  type="submit"
                  value={submitBtnVal}
                  disabled={isSubmittedManual}
                  className='border border-green-800 text-gray-800 hover:text-black font-bold rounded py-2 bg-green-400 hover:bg-green-500 w-full'
                />
              </div>

            </div>

            {
              isSubmitting &&
              <div className='absolute bottom-[60%] right-[45%] sm:right-[50%]'>
                <div>
                  <div className='flex gap-2 spinningLoading rounded-full items-center justify-center'>
                    <div className='bg-black h-2 w-2 rounded-full opacity-75 [box-shadow:0_0_80px_20px_rgba(0,0,0,0.7),0_0_160px_60px_rgba(0,0,0,0.25),0_0_240px_120px_rgba(0,0,0,0.08)]'></div>
                    <div className='bg-black h-3 w-3 rounded-full [box-shadow:0_0_80px_20px_rgba(0,0,0,0.7),0_0_160px_60px_rgba(0,0,0,0.25),0_0_240px_120px_rgba(0,0,0,0.08)]'></div>
                    <div className='bg-black h-2 w-2 rounded-full opacity-75 [box-shadow:0_0_80px_20px_rgba(0,0,0,0.7),0_0_160px_60px_rgba(0,0,0,0.25),0_0_240px_120px_rgba(0,0,0,0.08)]'></div>
                  </div>
                </div>
              </div>
            }

          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs