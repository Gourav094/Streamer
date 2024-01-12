import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { SEARCH_VIDEOS } from "../utils/constant"
import SearchCard from "./SearchCard"
import { Link, useSearchParams } from "react-router-dom"
import ButtonList from "./ButtonList"

const SearchPage = () => {
    const [filterVideos, setfilterVideos] = useState(null)
    
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

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
    console.log(filterVideos)
    return (
        <div className={`${isMenuOpen ? "mx-12":"mx-40"} px-4 overflow-hidden`}>
            <div className="pb-4">
            <ButtonList/>
            </div>
            {filterVideos.map((video,index) => <Link key={index} to={"/watch?v="+ (video.id.videoId || video.id.playlistId)}><SearchCard key={index} info = {video}/> </Link>)}
        </div>
    )
}

export default SearchPage