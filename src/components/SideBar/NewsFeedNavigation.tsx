import React from 'react'
import { Tv, Award, Globe, Zap, User } from 'react-feather'
import { NavigationTitle } from './NavigationTitle'

export const NewsFeedNavigation = () => {

    const sections = [
        { icon: Tv, gradient: 'bg-gradient-to-r from-[#0575e6] to-[#021b79]', text: 'Newsfeed' },
        { icon: Award, gradient: 'bg-gradient-to-r from-[#e44d26] to-[#f16529]', text: 'Badges' },
        { icon: Globe, gradient: 'bg-gradient-to-r from-[#f2994a] to-[#f2c94c] ', text: 'Explore Stories' },
        { icon: Zap, gradient: 'bg-gradient-to-r from-[#ee0979] to-[#ee0979] ', text: 'Popular Groups' },
        { icon: User, gradient: 'bg-gradient-to-r from-[#05f] to-[#09f] #05f', text: 'Author Profile' },
    ];

    return (
        <div className='my-2 pt-4 pb-2  '>
            <NavigationTitle heading='New Feeds' />
            {
                sections.map((el, index) => {
                    return (
                        <div key={'NavigationTitle' + index} className='flex h-[54px]  text-[15px] my-[1px] mx-[5px] py-[12px] px-[15px] items-center text-gray-400'>
                            <div className={` flex-center h-[45px] w-[45px]  ${el.gradient}  rounded-full   `}>
                                {React.createElement(el.icon, { color: '#fff', size: 20 })}
                            </div>
                            <span className='font-medium ml-4'>{el.text}</span>
                        </div>
                    )
                })
            }

        </div>
    )
}

