import React from 'react'
import { Settings, PieChart, MessageSquare } from 'react-feather'
import { NavigationTitle } from './NavigationTitle'


export const AccountNavigation = () => {
    const sections = [
        { icon: Settings, text: 'Settings' },
        { icon: PieChart, text: 'Analytics' },
        { icon: MessageSquare, text: 'Chat' },
    ];
    
    return (
        <div className='my-2 pt-4 pb-2  '>
            <NavigationTitle heading='Account' />
            {
                sections.map((el, index) => {
                    return (
                        <>
                            <div key={index} className='flex h-[44px] text-[15px]  py-[2px] px-[10px] items-center text-gray-400'>
                                <div className={'h-[45px] w-[45px] rounded-full flex-center '}>
                                    {React.createElement(el.icon, { color: '#adb5bd', size: 20 })}
                                </div>
                                <span className='font-medium ml-4 hover:text-blue-500 hover:cursor-pointer'>{el.text}</span>
                            </div>
                        </>
                    )
                })
            }
    
        </div>
    )
}


