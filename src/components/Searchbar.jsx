import React, { useState, useEffect, useRef } from 'react'
import Search from '../assets/search.png'
import Courses from './suggList.js'

function Searchbar() {
    const [ShowSugg, setShowSugg] = useState(false)
    const SuggRef = useRef(null)

    const suggList = Courses.map(e => {
        return (
            <div key={e} className='p-3 w-full ml-1.25 border-b border-gray-500/30 hover:bg-gray-200/10 hover:backdrop-filter hover:backdrop-blur transition-all'>
                <div>
                    {e}
                </div>
            </div>
        )
    })
    // let SuggListToShow = []
    const HandleInput = (e) => {
        // suggList = []
        // SuggListToShow = []
        if (e.target.value) {
            setShowSugg(true)
            // Courses.forEach(element => {
            //     if (element.toLowerCase().includes(e.target.value.toLowerCase())) {
            //         if (!suggList.includes(element)) {
            //             suggList.push(element)
            //         }
            //     }
            //     // console.log(suggList) // debug
            // });
        }
        else if (!e.target.value) {
            setShowSugg(false)
        }
        // suggList = suggList.filter(el => el !== undefined)
        // // console.log(suggList) // debug
        // SuggListToShow = suggList.map(e => {
        //     return (
        //         <div key={e} className='p-3 w-full ml-1.25 border-b border-gray-500/30 hover:bg-gray-200/10 hover:backdrop-filter hover:backdrop-blur transition-all'>
        //             <div>
        //                 {e}
        //                 {
        //                     console.log(e)
        //                 }
        //             </div>
        //         </div>
        //     )
        // })
        // console.log(SuggListToShow) // debug
    }

    useEffect((event) => {
        const HandleClickOutside = (event) => {
            if (SuggRef.current && !SuggRef.current.contains(event.target)) {
                setShowSugg(false)
            }
        }

        document.addEventListener('mousedown', HandleClickOutside)
        return () => {
            document.removeEventListener('mousedown', HandleClickOutside)
        }
    }, [])

    // console.log(suggList) // debug

    return (
        <div>
            <div className='flex items-center justify-center h-20 mb-20 px-5'>
                <div className='h-full flex items-center justify-center flex-col w-80 sm:w-100'>
                    <div className='h-full w-full flex items-center justify-start font-bold text-orange-500 px-5 cursor-default'>
                        Search By Name
                    </div>
                    <div className='bg-red-500 focus-within:bg-orange-500 flex flex-col rounded-md p-px group transition-all relative'>
                        <div className='flex'>
                            <input type="text" className='h-full text-start px-5 py-2 w-40 sm:w-100 rounded-md bg-white focus:outline-none transition-all' onChange={HandleInput} onFocus={HandleInput} />
                            <img src={Search} alt="Search" width={38} className='transition-all cursor-pointer' />
                        </div>
                        <div
                            className='absolute top-10 bg-gray-200/30 border border-gray-400 rounded-sm w-full h-60 flex flex-col items-center justify-start backdrop-filter backdrop-blur transition-all duration-500 overflow-x-hidden overflow-y-scroll suggListScrollBar'
                            style={{
                                top: ShowSugg ? '40px' : '60px',
                                opacity: ShowSugg ? '100%' : '0%'
                            }}
                            ref={SuggRef}
                        >
                            { suggList }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar
