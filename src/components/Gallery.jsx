import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import images
import One from '../assets/display_01.jpg'
import Two from '../assets/display_02.jpg'
import Three from '../assets/display_03.jpg'
import Four from '../assets/display_04.jpg'
import Five from '../assets/display_05.jpg'
import Six from '../assets/display_06.jpg'

export default function Gallery() {
    return (
        <>
            <div className='bg-gray-900 px-auto w-full grid place-items-center'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Pagination, Navigation, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    className="mySwiper py-10"
                    style={{
                        height: '500px', 
                        width: '280px',
                        margin: '5px',
                        padding: '0px 0px'
                    }}
                >
                    <SwiperSlide>
                        <img src={One} alt="IMAGE" className='w-full h-full object-contain' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Two} alt="IMAGE" className='w-full h-full object-contain' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Three} alt="IMAGE" className='w-full h-full object-contain' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Four} alt="IMAGE" className='w-full h-full object-contain' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Five} alt="IMAGE" className='w-full h-full object-contain' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Six} alt="IMAGE" className='w-full h-full object-contain' />
                    </SwiperSlide>
                </Swiper>
            </div >
        </>
    );
}
