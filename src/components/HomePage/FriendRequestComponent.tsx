import React from 'react'

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


export const FriendRequestTile = ({ user_image_url, name, friends_count }: FriendRequestProps) => {
    return (
        <div className='mt-2'>
            <div className='flex items-start w-full '>

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
            <div className=' flex items-center gap-2 h-[60px] font-medium mt-2 '>
                <button className='rounded-2xl p-2 text-[12px] w-[100px] text-white' style={{ background: "linear-gradient(135deg,#05f,#09f)" }}>Confirm</button>
                <button className='rounded-2xl p-2 text-[12px] w-[100px]' style={{ background: "#eee" }}>Delete</button>
            </div>
        </div>
    )
}


const FriendRequestComponent = () => {
    return (
        <div className='mt-4 p-6 w-[90%]'>
            <div className='flex justify-between text-[14px] mb-12'>
                <span className='text-[#212529] font-medium'>Friend Request</span>
                <button className='text-[#1e74fd] font-medium cursor-pointer'>See all</button>
            </div>

            {
                friendRequestData.map((el, index) => {
                    return <FriendRequestTile key={'FriendRequestTile' + index} id={el.id} user_image_url={el.user_image_url} name={el.name} friends_count={el.friends_count} />
                })
            }


        </div>
    )
}

export default FriendRequestComponent