import React from 'react'
import { Edit, Video, Image, Camera } from 'react-feather'
import { DotComponent } from './DotComponent'

const profile_pic = 'https://uitheme.net/sociala/images/user-8.png'

const AddPostComponent = () => {
    return (
        <div className='h-[245px] flex justify-center w-full mt-10 pt-1 px-[12px]  '>
            <div className='w-full h-full '>
                <div className='flex items-center h-[35px] text-[#adb5bd]'>
                    <Edit color='#1e74fd' className='ml-1 mr-3' size={18} />
                    <span className='text-[12px] font-medium tracking-wide'>Create Post</span>
                </div>
                <div className='flex gap-2 mt-4'>
                    <img src={profile_pic} className='rounded-full h-[30px] w-[30px]' />
                    <textarea rows={5} placeholder='Whats on your mind?' className="flex-1 pt-1 resize-none rounded-md focus:outline-none text-[#adb5bd] text-[14px] placeholder:text-[14px]"></textarea>
                </div>
                {/* Icons */}
                <div className='flex justify-between mt-4'>

                    <div className='flex gap-8 '>
                        <div className='flex-center gap-2'>
                            <Video color='#e50202' size={20} />
                            <span className='text-[14px] tracking-wide leading-3 text-gray-800 font-normal'>Live Video</span>
                        </div>
                        <div className='flex-center gap-2'>
                            <Image color='#10d876' size={20} />
                            <span className='text-[14px] tracking-wide leading-3 text-gray-800 font-normal'>Photo/Video</span>
                        </div>
                        <div className='flex-center gap-2'>
                            <Camera color='#fe9431' size={20} />
                            <span className='text-[14px] tracking-wide leading-3 text-gray-800 font-normal'>Feeling/Activity</span>
                        </div>
                    </div>

                    <DotComponent />

                </div>
            </div>
        </div>
    )
}

export default AddPostComponent