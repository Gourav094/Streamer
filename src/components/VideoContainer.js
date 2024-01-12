import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEO_API } from '../utils/constant'
 
const VideoContainer = () => {
  const [videos,setvideos] = useState([])
  const [nextPageToken,setnextPageToken] = useState("")
  useEffect(() => {
    getVideoData();
  },[])

  useEffect(() => {
    window.addEventListener('scroll',infiniteScroll,true);
    return () => {
      window.removeEventListener('scroll',infiniteScroll,true);
    }
  },[nextPageToken])

  const getVideoData = async() => {
    console.log("api called")
    const url = nextPageToken !== ""?`${YOUTUBE_VIDEO_API}&pageToken=${nextPageToken}`:YOUTUBE_VIDEO_API
    const data = await fetch(url)

    const json = await data.json(); 
    setnextPageToken(json?.nextPageToken)
    setvideos([...videos,...json.items])
  }

  const infiniteScroll = () => {
    if(window.innerHeight + Math.round(document.documentElement.scrollTop) >= document.documentElement.offsetHeight - 300){
      getVideoData();
    }
  }

  if(videos.length === 0)return null;
  
  return (
    <div className={`flex flex-wrap `}> 
      {/* {videos[0] && <AdVideoCard info = {videos[0]}/>} */}
      {videos.map(video => <Link key={video.id} to={"/watch?v="+ video.id}><VideoCard info = {video}/> </Link>)}
    </div>
  )
}

export default VideoContainer
