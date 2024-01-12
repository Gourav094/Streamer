import React, { useState } from 'react'
import { formatCompactNumber, formateUploadTime } from '../utils/helper';
import { useSelector } from 'react-redux';

const VideoCard = ({info}) => {
    const {snippet,statistics} = info;
    const {channelTitle,title,publishedAt,thumbnails} = snippet;
    
    const [isVisible, setIsVisible] = useState(false);
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    const handleMouseEnter = () => {
        setTimeout(() => {
            setIsVisible(true)
        },600)
    }
    

    return (
        <div className={`my-8 mr-4 ${isMenuOpen?"w-80":"w-[380px]"}`}>
            <img className=' rounded-xl w-full' alt="thumbnail" src={thumbnails.medium.url}/>
            <span className='group relative' onMouseEnter={handleMouseEnter} onMouseLeave={() => setIsVisible(false)}>
                <h3 className='font-semibold pt-2 truncate'>
                    {title}    
                    <span>
                    <div className={`${isVisible && 'group-hover:opacity-100'} absolute opacity-0 transition-opacity bg-neutral-800 py-1 px-2 ml-[50%] shadow-md text-gray-100 text-xs left-1/2 transform -translate-x-1/2 font-normal`}>{title}</div>
                    </span>
                </h3>
            </span>
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
