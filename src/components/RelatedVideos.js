import { formatCompactNumber, formateUploadTime } from "../utils/helper";

const RelatedVideos = ({info}) => {
    const {snippet,statistics} = info;
    const {channelTitle,title,publishedAt,thumbnails} = snippet;
    return (
        <div className="flex gap-2 py-2">
            <img className="w-44 h-24 rounded-xl" alt="thumbnail" src={thumbnails.medium.url}/>
            <div className="flex flex-col text-sm w-3/5">
                <h3 className="font-semibold text-md line-clamp-2">{title}</h3>
                <p className="text-gray-600 pt-1">{channelTitle}</p>
                <div className='flex gap-2 text-xs'>
                    <p className=''>{formatCompactNumber(statistics.viewCount)} views</p>
                    <p className=''>{formateUploadTime(publishedAt)}</p>
                </div>
            </div>
        </div>
    )
}

export default RelatedVideos;