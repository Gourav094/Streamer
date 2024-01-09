// import React, { useEffect, useState } from "react"
// import { useSelector } from "react-redux"
// import { SEARCH_VIDEOS } from "../utils/constant"

// const SearchPage = () => {

//     const [filterVideos,setfilterVideos] = useState(null)

//     const searchQuery = useSelector((store) => store.query)

//     useEffect(() => {
//         getFilteredVideos()
//       },[searchQuery])
    
//     const getFilteredVideos = async() => {
//         const data = await fetch(SEARCH_VIDEOS(searchQuery))

//         const json = await data.json()
        
//         setfilterVideos(json.items)
//         console.log(filterVideos)
//     }
//     if(filterVideos === null)return null
    
//     const {thumbnails,title,channelTitle} = filterVideos[0].snippet
//     return (
//         <div className="flex gap-4 pt-8">
//             <div className="">
//                 <img className="rounded-2xl w-96 h-72" src={thumbnails.medium.url} alt="thumbnail"/>
//             </div>
//             <div className="">
//                 <h3>{title}</h3>
//                 <div className="flex">
//                     <p>views</p>
//                     <p>2 weeks ago</p>
//                 </div>
//                 <p>{channelTitle}</p>
//             </div>
//         </div>
//     )
// }

// export default SearchPage