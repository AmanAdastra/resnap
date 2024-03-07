import React from 'react'
import { Zap, Search, Home, Video, User, ShoppingBag, Bell, MessageSquare, Settings } from 'react-feather'
import Link from 'next/link'

interface LinkProps{
    href: string,
    icon: any,
    color?: string,
    size: number,
    animate?: string
}

const IconLink = ({ href, icon, color, size = 20, animate }: LinkProps) => (
    <Link href={href} className='p-2 h-[66px] w-[66px] flex-center'>
        <div className={`h-[50px] w-[50px] rounded-full flex-center ${color ? `bg-[${color}]` : ''} ${animate ? animate : ''} `}>
            {React.createElement(icon, { color: color || '#adb5bd', size })}
        </div>
    </Link>
);


export const NavigationBar = () => {

    const pageLinks = [
        { href: '/', icon: Home, color: '#05f', size: 24 },
        { href: '/', icon: Zap, size: 24 },
        { href: '/', icon: Video, size: 24 },
        { href: '/', icon: User, size: 24 },
        { href: '/', icon: ShoppingBag, size: 24 },
    ];
    const settingLinks = [
        { href: '/', icon: Bell, color: '#05f', size: 28 },
        { href: '/', icon: MessageSquare, color: '#05f', size: 28 },
        { href: '/', icon: Settings, color: '#05f', size: 28, animate: 'animate-spin-slow' },
    ]

    return (
        <div className='fixed top-0 left-0 flex items-center h-[96px] w-full bg-white px-[15px] z-50'>
            {/* Site Icons */}
            <div className='flex items-center w-[280px] h-[90px] pl-[10px]'>
                <Zap color='#10d876' size={36} className='mr-2' />
                <span className='text-[#05f] font-bold text-4xl tracking-wide'>ReSnap.</span>
            </div>
            {/* Search Box */}
            <div className='bg-[#eee] py-2 pl-[16px] pr-[16px] h-[48px] w-[350px] flex-center rounded-[30px]'>
                <Search color='#ced4da' size={20}  />
                <input className='flex-1 h-[20px] focus:outline-none p-4 placeholder:text-[14px] placeholder:text-gray-500 placeholder:flex-center ' placeholder='Start typing to search ...' />
            </div>
            {/* Icons */}
            <div className='flex justify-between w-[calc(100vw-630px)] h-full '>
                <div className='flex items-center h-full  '>
                    {pageLinks.map((link, index) => (
                        <IconLink key={'pageLinks' + index} href='/' icon={link.icon} color={link.color} size={link.size} animate='' />
                    ))}
                </div>

                <div className='flex items-center h-full'>
                    {settingLinks.map((link, index) => (
                        <IconLink key={'settingLinks' + index} href='/' icon={link.icon} color={link.color} size={link.size} animate={link.animate} />
                    ))}
                </div>
            </div>
        </div>
    );
};