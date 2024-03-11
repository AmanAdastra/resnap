import React from 'react'
import { DotComponent } from './DotComponent'

interface AccountInfoTileProps {
    imageUrl: string,
    username: string,
    timeString: string
}


export const AccountInfoTile = (accountProps: AccountInfoTileProps) => {
    return (
        <>
            <div className='flex items-center justify-between  '>
                <div className='flex'>
                    <div className='w-[45px] h-[45px] rounded-full mr-2 '>
                        <img src={accountProps.imageUrl} className='w-full h-full' />
                    </div>
                    <div className='text-[12px] pt-1 tracking-wider px-2' >
                        <div className='font-medium '>
                            {accountProps.username}
                        </div>
                        <div className='text-gray-400'>
                            {accountProps.timeString}
                        </div>
                    </div>
                </div>
                <DotComponent />
            </div>

        </>
    )
}

