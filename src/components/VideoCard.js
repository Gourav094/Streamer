import React from 'react'
import { formatCompactNumber, formateUploadTime } from '../utils/helper';
import { useSelector } from 'react-redux';

const VideoCard = ({info}) => {
    const {snippet,statistics} = info;
    const {channelTitle,title,publishedAt,thumbnails} = snippet;

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    return (
        <div className={`my-8 mr-4 ${isMenuOpen?"w-80":"w-[380px]"}`}>
            <img className=' rounded-xl w-full' alt="thumbnail" src={thumbnails.medium.url}/>
            <h3 className='font-semibold pt-2 truncate'>{title}</h3>
            <div className='text-sm text-gray-600'>
                <p className='text-sm'>{channelTitle}</p>
                <div className='flex gap-2'>
                    <p className=''>{formatCompactNumber(statistics.viewCount)} views</p>
                    <p className=''>{formateUploadTime(publishedAt)}</p>
                </div>
            </div>
        </div>
    )
}

export const AdVideoCard = ({info}) => {
    return (
        <div className=''>
            <VideoCard info={info}/>
            <p>ad</p>
        </div>
    )
} 

export default VideoCard
