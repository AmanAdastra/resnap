import React from 'react'
import { NewsFeedNavigation } from './NewsFeedNavigation'
import { MorePagesNavigation } from './MorePagesNavigation'
import { AccountNavigation } from './AccountNavigation'

export const SideBar = () => {
    return (
        <div className='w-[280px] px-[15px]'>
            <NewsFeedNavigation/>
            <MorePagesNavigation/>
            <AccountNavigation/>
        </div>
    )
}

