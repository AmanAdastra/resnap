import React from 'react'
import { NewsFeedNavigation } from './NewsFeedNavigation'
import { MorePagesNavigation } from './MorePagesNavigation'
import { AccountNavigation } from './AccountNavigation'

export const SideBar = () => {
    return (
        <div className='w-[280px] h-[100vh] pt-[96px] overflow-y-auto  px-[15px]'>
            <NewsFeedNavigation/>
            <MorePagesNavigation/>
            <AccountNavigation/>
        </div>
    )
}

