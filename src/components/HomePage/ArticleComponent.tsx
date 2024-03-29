import React from 'react'
import { AccountInfoTile } from './AccountInfoTile'
import { ContentTile } from './ContentTile'
import PicsTile from './PicsTile'
import ArticleStats from './ArticleStats'

export const ArticleComponent = () => {
  return (
    <> 
    <div className='px-[12px] py-[24px]'>
      <AccountInfoTile imageUrl='https://uitheme.net/sociala/images/user-7.png' username='Surfiya Zakir' timeString='3 hour ago' />
      <ContentTile />
      <PicsTile />
      <ArticleStats />
    </div>
    <div className='px-[12px] py-[24px]'>
      <AccountInfoTile imageUrl='https://uitheme.net/sociala/images/user-8.png' username='Goria Coast' timeString='2 hour ago' />
      <ContentTile />
      <ArticleStats />
    </div>
    </>
  )
}

