import React from 'react'
import { ThumbsUp, Heart, MessageCircle, Share2 } from 'react-feather'

const ArticleStats = () => {
    return (
        <div className='my-[16px] text-[16px]'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-1 items-center'>
                    <div className='flex-center rounded-full w-[25px] h-[25px] ' style={{ background: 'linear-gradient(135deg,#05f,#09f)' }}>
                        <ThumbsUp color='#fff' size={16} />
                    </div>
                    <div className='flex-center rounded-full w-[25px] h-[25px] ' style={{ background: 'linear-gradient(135deg,#e44d26,#f16529)' }}>
                        <Heart color='#fff' size={16} />
                    </div>
                    <p className='text-[12px] font-normal mx-2'>
                        2.8K Like
                    </p>
                    <div className='flex items-center gap-2'>
                        <MessageCircle color='#212529'  size={25} />
                        <span className='text-[14px] font-normal'>22 Comment</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                        <Share2 color='#212529'  size={25} />
                        <span className='text-[14px] font-normal'>Share</span>
                </div>
            </div>
        </div>
    )
}

export default ArticleStats