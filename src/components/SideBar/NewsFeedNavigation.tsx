import React from 'react'
import { Tv, Award, Globe, Zap, User } from 'react-feather'
import { NavigationTitle } from './NavigationTitle'

export const NewsFeedNavigation = () => {

    const sections = [
        { icon: Tv, gradientFrom: '#0575e6', gradientTo: '#021b79', text: 'Newsfeed' },
        { icon: Award, gradientFrom: '#e44d26', gradientTo: '#f16529', text: 'Badges' },
        { icon: Globe, gradientFrom: '#f2994a', gradientTo: '#f2c94c', text: 'Explore Stories' },
        { icon: Zap, gradientFrom: '#ee0979', gradientTo: '#ee0979', text: 'Popular Groups' },
        { icon: User, gradientFrom: '#05f', gradientTo: '#09f', text: 'Author Profile' },
    ];

    return (
        <div className='my-2 pt-4 pb-2  '>
            <NavigationTitle heading='New Feeds' />
            {
                sections.map((el, index) => {
                    return (
                        <>
                            <div key={index} className='flex h-[54px]  text-[15px] my-[1px] mx-[5px] py-[12px] px-[15px] items-center text-gray-400'>
                                <div className={'h-[45px] w-[45px] rounded-full flex-center ' + ` bg-gradient-to-r from-[${el.gradientFrom}] to-[${el.gradientTo}] `}>
                                    {React.createElement(el.icon, { color: '#fff', size: 20 })}
                                </div>
                                <span className='font-medium ml-4'>{el.text}</span>
                            </div>
                        </>
                    )
                })
            }

        </div>
    )
}

