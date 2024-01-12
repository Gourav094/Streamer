import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { Link, useSearchParams } from 'react-router-dom';
import { VIDEO_DATA, YOUTUBE_VIDEO_API } from '../utils/constant';
import { formatCompactNumber } from '../utils/helper';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';
import RelatedVideos from './RelatedVideos';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [videoId] = useSearchParams()
    const [videoData, setvideoData] = useState(null)
    const [relatedVideos,setrelatedVideos] = useState([])

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    useEffect(() => {
        dispatch(closeMenu())
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await Promise.all([fetch(VIDEO_DATA(videoId.get('v'))),fetch(YOUTUBE_VIDEO_API)])
        const watchJson = await data[0].json();
        const relatedJson = await data[1].json();
        setvideoData(watchJson)
        setrelatedVideos(relatedJson.items)
        console.log(relatedVideos)
    }


    if (videoData === null) return null;

    const { channelTitle, title, thumbnails, description } = videoData.items[0].snippet
    const { likeCount, viewCount } = videoData.items[0].statistics

    return (
        <div className={`pt-6 flex w-full ${!isMenuOpen?"px-32":"backdrop-blur-sm pr-10"}`}>
            <div className='max-w-[1000px]'>
                <iframe width="1000" height="550" className='rounded-2xl'
                    src={"https://www.youtube.com/embed/" + videoId.get("v")}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>

                <h3 className='font-bold text-lg py-2'>{title}</h3>
                <div className='mb-4 flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='flex gap-3'>
                            <img className='w-10 h-10 rounded-full' src={thumbnails.default.url} alt='thumbnail' />
                            <div>
                                <h3 className='font-semibold'>{channelTitle}</h3>
                                <p className='text-sm'>6.17M subscribers</p>
                            </div>
                        </div>
                        <div>
                            <button className='bg-black rounded-3xl py-2 px-4 ml-2 text-sm font-medium text-white'>Subscribe</button>
                        </div>
                    </div>
                    <div className='text-gray-800'>
                        <button className='bg-gray-100 rounded-l-full px-3 py-1 hover:bg-gray-200'>
                            <i className="fa-regular fa-thumbs-up mr-1"></i>
                            <span className='font-medium text-sm'>{formatCompactNumber(likeCount)}</span>
                        </button>
                        <button className='bg-gray-100 rounded-r-full px-3 py-1 border-l-2 border-gray-200 hover:bg-gray-200'>
                            <i className="fa-regular fa-thumbs-down mr-1"></i>
                        </button>
                        <button className='py-1 px-3 rounded-full bg-gray-100 hover:bg-gray-200 ml-2'>
                            <i className="fa-solid fa-share mr-1"></i>
                            <span className='font-medium text-sm'>Share</span>
                        </button>
                        <button className='py-1 px-3 rounded-full bg-gray-100 hover:bg-gray-200 ml-2'>
                            <i className="fa-solid fa-arrow-down mr-1"></i>
                            <span className='font-medium text-sm'>Download</span>
                        </button>
                        <button className='py-1 px-3 rounded-full bg-gray-100 hover:bg-gray-200 ml-2'>
                            <i className="fa-solid fa-ellipsis"></i>
                        </button>
                    </div>
                </div>
                <div className='bg-gray-200 text-sm rounded-lg p-2 h-18'>
                    <p className='font-semibold '>{formatCompactNumber(viewCount)} views</p>
                    <p className='w-2/3 truncate'>{description}</p>
                    <p className='ml-2 font-semibold '>...more</p>
                </div>
                <div>
                    <CommentContainer />
                </div>
            </div>
            <div className='w-1/3 flex flex-col'>
                <div className='w-full pb-6'>
                    <LiveChat />
                </div>
                <div className='px-6 w-full'>
                    {relatedVideos.map((video) => <Link key={video.id} to={"/watch?v="+ video.id}><RelatedVideos info = {video}/> </Link>)}
                </div>
            </div>
        </div>
    )
}

export default WatchPage