"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Plus } from 'react-feather';
import 'swiper/css';


const story_data = [
    { id: 1, user: 'https://uitheme.net/sociala/images/user-11.png', content: 'https://uitheme.net/sociala/images/s-1.jpg', username: "Victor Exrixon", type: 'image' },
    { id: 2, user: 'https://uitheme.net/sociala/images/user-12.png', content: 'https://uitheme.net/sociala/images/s-2.jpg', username: "Surfiya Zakir", type: 'image' },
    { id: 3, user: 'https://uitheme.net/sociala/images/user-9.png', content: 'https://uitheme.net/sociala/images/s-4.mp4', username: "Goria Coast", type: 'video' },
    { id: 4, user: 'https://uitheme.net/sociala/images/user-4.png', content: 'https://uitheme.net/sociala/images/s-3.mp4', username: "Hurin Seary", type: 'video' },
    { id: 5, user: 'https://uitheme.net/sociala/images/user-2.png', content: 'https://uitheme.net/sociala/images/s-6.jpg', username: "Surfiya Zakir", type: 'image' },
    { id: 6, user: 'https://uitheme.net/sociala/images/user-3.png', content: 'https://uitheme.net/sociala/images/s-7.jpg', username: "Surfiya Zakir", type: 'image' },

]

const StoryComponent = () => {
    return (
        <Swiper
            slidesPerView={5}
            className='w-[60%] mt-10'
        >
            <SwiperSlide key={'StoryComponent-' + 0}>
                <div className={"flex flex-col items-center justify-end h-[200px] w-[125px] rounded-lg bg-[#343b41]"} >
                    <div className='h-1/2 w-full flex flex-col items-center'>
                        <div className='h-[50px] w-[50px] rounded-full bg-white flex-center cursor-pointer'>
                            <Plus color='#1e74fd' size={25} />
                        </div>
                        <span className='text-[12px] mx-auto text-white mt-2 mb-1 tracking-wider font-semibold'>
                            Add Story
                        </span>
                    </div>
                </div>
            </SwiperSlide>

            {story_data.map((el, index) => (
                <SwiperSlide key={'StoryComponent-video-' + index}>
                    <div className={"flex flex-col items-center justify-end h-[200px] w-[125px] rounded-lg cursor-pointer relative"} style={el.type == "image" ? { backgroundImage: `url(${el.content})` } : undefined}>
                        {
                            el.type == "video" ? (
                                <video className="h-full w-full object-cover rounded-lg" autoPlay loop >
                                    <source src={el.content} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) :
                                (
                                    <></>
                                )
                        }
                        <div className='h-1/2 w-full flex flex-col items-center rounded-lg absolute  left-0 right-0 bottom-0' style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, .01) 20%, rgba(0, 0, 0, .9) 90%)" }}>
                            <div className='h-[50px] w-[50px] rounded-full bg-cover' style={{ backgroundImage: `url(${el.user})` }}></div>
                            <span className='text-[12px] mx-auto text-white mt-2 mb-1 tracking-wider font-semibold'>
                                {el.username}
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default StoryComponent