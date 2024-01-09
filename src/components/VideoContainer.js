import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEO_API } from '../utils/constant'
 
const VideoContainer = () => {
  const [videos,setvideos] = useState([])

  useEffect(() => {
    getVideoData();
  },[])

  const getVideoData = async() => {
    const data = await fetch(YOUTUBE_VIDEO_API)

    const json = await data.json(); 

    setvideos(json.items)
  }
  return (
    <div className={`flex flex-wrap`}> 
      {/* {videos[0] && <AdVideoCard info = {videos[0]}/>} */}
      {videos.map(video => <Link key={video.id} to={"/watch?v="+ video.id}><VideoCard info = {video}/> </Link>)}
    </div>
  )
}

export default VideoContainer
