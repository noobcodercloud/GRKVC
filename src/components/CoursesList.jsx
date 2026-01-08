import React from 'react'
import CourseCard from './CourseCard'
import Courses from './courseData.js'

function CoursesList(props) {

  const handleClick = () => {
    props.ScrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const ComputerCourses = {
    ThreeMonthCourseList: Courses.ComputerCourses.ThreeMonthsCourses.coursesList.map(course => {
      return (
        <div className='w-full font-Montserrat' key={course} onClick={handleClick}>
          <div className='py-5 px-5 border-b border-gray-300 w-full hover:bg-gray-200'>
            {course}
          </div>
        </div>
      )
    }),
    SixMonthCourseList: Courses.ComputerCourses.SixMonthsCourses.coursesList.map(course => {
      return (
        <div className='w-full font-Montserrat' key={course} onClick={handleClick}>
          <div className='py-5 px-5 border-b border-gray-300 w-full hover:bg-gray-200'>
            {course}
          </div>
        </div>)
    }),
    OneYearCourseList: Courses.ComputerCourses.OneYearCourses.coursesList.map(course => {
      return (
        <div className='w-full font-Montserrat' key={course} onClick={handleClick}>
          <div className='py-5 px-5 border-b border-gray-300 w-full hover:bg-gray-200'>
            {course}
          </div>
        </div>)
    })
  }

  const TeachingTraining = Courses.TeacherTraining.coursesList.map(course => {
    return (
      <div className='w-full font-Montserrat' key={course} onClick={handleClick}>
        <div className='py-5 px-5 border-b border-gray-300 w-full hover:bg-gray-200'>
          {course}
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-evenly xl:pl-10 py-3 w-full'>
        <div className='md:w-[50%]'>
          <div className='text-4xl font-bold text-center font-Montserrat'>Computer Courses</div>
          <div className='font-Montserrat'>
            <CourseCard title={'3 Month Courses'} courseList={ComputerCourses.ThreeMonthCourseList} />
            <CourseCard title={'6 Month Courses'} courseList={ComputerCourses.SixMonthCourseList} />
            <CourseCard title={'1 Year Courses'} courseList={ComputerCourses.OneYearCourseList} />
          </div>
        </div>
        <div className='md:w-[50%]'>
          <div className='text-4xl font-bold text-center font-Montserrat'>Teaching Training</div>
          <div className='font-Montserrat'>
            <CourseCard title={'Courses'} courseList={TeachingTraining} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesList