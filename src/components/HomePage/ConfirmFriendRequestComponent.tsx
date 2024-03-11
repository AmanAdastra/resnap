import React from 'react'
import { ChevronRight, Plus } from 'react-feather'

interface FriendRequestProps {
    id: number,
    user_image_url: string,
    name: string,
    friends_count: string
}

const friendRequestData = [
    {
        id: 1, user_image_url: 'https://uitheme.net/sociala/images/user-7.png', name: "Anthony Daugloi", friends_count: '12 mutual friends'
    },
    {
        id: 2, user_image_url: 'https://uitheme.net/sociala/images/user-8.png', name: "Mohannad Zitoun ", friends_count: '12 mutual friends'
    },
    {
        id: 3, user_image_url: 'https://uitheme.net/sociala/images/user-6.png', name: "Anthony Daugloi", friends_count: '12 mutual friends'
    }
]


export const ConfirmFriendRequestTile = ({ user_image_url, name, friends_count }: FriendRequestProps) => {
    return (
        <div className=' p-4'>
            <div className='flex justify-between items-center w-full'>
                <div className='flex items-start '>

                    <div className='w-[45px] h-[45px] rounded-full mr-2 '>
                        <img src={user_image_url} className='w-full h-full' />
                    </div>
                    <div className='text-[12px] tracking-wider px-2' >
                        <div className='font-medium '>
                            {name}
                        </div>
                        <div className='text-gray-400'>
                            {friends_count}
                        </div>
                    </div>
                </div>
                <ChevronRight size={16}/>
            </div>
        </div>
    )
}


export const ConfirmFriendComponent = () => {
    return (
        <div className='px-2 w-[90%]'>
            <div className='flex justify-between text-[14px] mb-6'>
                <span className='text-[#212529] font-medium'>Confirm Friend</span>
                <button className='text-[#1e74fd] mr-4 font-medium cursor-pointer'>See all</button>
            </div>
            {
                friendRequestData.map((el, index) => {
                    return <ConfirmFriendRequestTile key={'ConfirmFriendRequestTile' + index} id={el.id} user_image_url={el.user_image_url} name={el.name} friends_count={el.friends_count} />
                })
            }
        </div>
    )
}

