import React from 'react'

export const NavigationTitle = ({ heading }: { heading: string }) => {
    return (
        <div className=' pl-[25px] text-[#adb5bd] text-[12px] mb-[5px] font-medium tracking-wide'>
            {heading}
        </div>
    )
}
