import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { SEARCH_VIDEOS } from "../utils/constant"
import SearchCard from "./SearchCard"
import { Link, useSearchParams } from "react-router-dom"
import ButtonList from "./ButtonList"

const SearchPage = () => {
    const [filterVideos, setfilterVideos] = useState(null)
    
    const [videoId] = useSearchParams()

    useEffect(() => {
        if (videoId) {
            getFilteredVideos(videoId.get('query'));
        }
    }, [videoId])

    const getFilteredVideos = async (query) => {
        const data = await fetch(SEARCH_VIDEOS(query))

        const json = await data.json()

        setfilterVideos(json.items)
    }
    if (filterVideos === null) return null

    return (
        <div className="mx-12 px-4">
            <div className="pb-4">
            <ButtonList/>
            </div>
            {filterVideos.map((video,index) => <Link key={index} to={"/watch?v="+ video.id.videoId}><SearchCard key={index} info = {video}/> </Link>)}
        </div>
    )
}

export default SearchPage