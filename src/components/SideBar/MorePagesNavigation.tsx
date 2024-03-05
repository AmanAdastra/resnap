import React from 'react'
import { Inbox, Home, MapPin, Zap, Youtube } from 'react-feather'
import { NavigationTitle } from './NavigationTitle'


export const MorePagesNavigation = () => {
  const sections = [
    { icon: Inbox, text: 'Email Box' },
    { icon: Home, text: 'Near Hotel' },
    { icon: MapPin, text: 'Latest Event' },
    { icon: Youtube, text: 'Live Stream' },
];

return (
    <div className='my-2 pt-4 pb-2  '>
        <NavigationTitle heading='More Pages' />
        {
            sections.map((el, index) => {
                return (
                        <div key={ 'MorePagesNavigation' + index} className='flex h-[54px]  text-[15px] my-[1px] py-[12px] px-[15px] items-center text-gray-400'>
                            <div className={'h-[45px] w-[45px] rounded-full flex-center '}>
                                {React.createElement(el.icon, { color: '#05f', size: 28 })}
                            </div>
                            <span className='font-medium ml-4 hover:text-blue-500 hover:cursor-pointer'>{el.text}</span>
                        </div>
                )
            })
        }

    </div>
)
}
