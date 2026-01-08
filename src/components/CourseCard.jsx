import React, { useState, useRef, useEffect } from 'react'
import UpArrow from '../assets/arrow-up.png'
import DownArrow from '../assets/arrow-down.png'


function CourseCard(props) {
  const [IsExpanded, setIsExpanded] = useState(false)
  const [ArrowState, setArrowState] = useState(DownArrow)
  const [ShowMoreOrLess, setShowMoreOrLess] = useState('Show More...')
  const [ContentHeight, setContentHeight] = useState('160px')
  const ContentRef = useRef(null)
  const handleChange = () => {
    if (IsExpanded) {
      setArrowState(DownArrow)
      setShowMoreOrLess("Show More...")
      setContentHeight(`160px`);
    } else {
      setArrowState(UpArrow)
      setShowMoreOrLess("Show Less")
      setContentHeight(`${ContentRef.current.scrollHeight}px`);
    }
    setIsExpanded(!IsExpanded)
  }

  return (
    <div className='m-5 bg-gray-800 transition-all'>
      <div className='border-y border-gray-300 flex flex-col justify-center items-center transition-all'>
        <div className='min-h-20 bg-white transition-all w-full'>
          <div className='w-full'>
            <div className=''>
              <div className='text-xl font-bold text-center py-3 font-Montserrat bg-[#F9BE4D]'>{props.title}</div>
            </div>
            <div
              ref={ContentRef}
              className='text-left overflow-hidden transition-all w-full duration-700'
              style={{
                height: ContentHeight
              }}
            >
              {props.courseList}
            </div>
            <div className={`bg-gray-100 border-t border-gray-200 hover:bg-gray-200 py-1 flex items-center justify-center transition-all cursor-pointer gap-5 group`} onClick={handleChange}>
              <span className='font-semibold text-shadow-xs text-sm group-hover:font-bold transition-all'>{ShowMoreOrLess}</span>
              <img src={ArrowState} alt="downArrow" width={18} className='cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default CourseCard