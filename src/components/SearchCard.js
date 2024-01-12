import { formateUploadTime } from "../utils/helper";
import React from "react";

const SearchPage = ({ info }) => {
    const { snippet } = info;
    const { thumbnails, title, description, publishedAt, channelTitle } = snippet
    return (
        <div className="flex gap-4 py-2 h-[280px]">
            <div className="w-2/6 ">
                <img className="w-full h-full rounded-2xl" src={thumbnails.medium.url} alt="thumbnail" />
            </div>
            <div className="flex flex-col w-1/2">
                <h3 className="font-semibold w-4/5">{title}</h3>
                <div className="flex gap-2 text-xs pb-3 text-gray-600">
                    <p>views</p>
                    <li>{formateUploadTime(publishedAt)}</li>
                </div>
                <p className="pb-2">{channelTitle}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default SearchPage;