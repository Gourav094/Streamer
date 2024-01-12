const API_KEY = process.env.REACT_APP_YOUTUBE_API

export const LIVE_CHAT_COUNT = 40;

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" + API_KEY;


export const VIDEO_DATA = (videoId) => {
    return (
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    )
}

export const YOUTUBE_SEARCH_API = "https://corsproxy.org/?http%3A%2F%2Fsuggestqueries.google.com%2Fcomplete%2Fsearch%3Fclient%3Dfirefox%26ds%3Dyt%26q=";

export const SEARCH_VIDEOS = (Query) => {
    return `https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=25&q=${Query}&key=${API_KEY}`
}