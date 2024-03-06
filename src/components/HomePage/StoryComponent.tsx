"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const story_data = [
    { id: 1, user: 'https://uitheme.net/sociala/images/user-11.png', image: 'https://uitheme.net/sociala/images/s-1.jpg' },
    { id: 2, user: 'https://uitheme.net/sociala/images/user-12.png', image: 'https://uitheme.net/sociala/images/s-2.jpg' },
    { id: 3, user: 'https://uitheme.net/sociala/images/user-9.png', image: 'https://uitheme.net/sociala/images/s-3.mp4' },
    { id: 4, user: 'https://uitheme.net/sociala/images/user-4.png', image: 'https://uitheme.net/sociala/images/s-4.mp4' },
]

const StoryComponent = () => {
    return (
            <Swiper
                slidesPerView={5}
                className='w-[60%] mt-10'
            >
                {[1, 2, 3, 4, 5, 6, 7].map((el, index) => {
                    return (
                        <SwiperSlide key={'StoryComponent-' + index}>
                            <div className=' h-[200px] w-[125px] bg-gray-400 rounded-lg'>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
    )
}

export default StoryComponent