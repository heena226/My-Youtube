export const HAMBURGER_ICON = "https://www.svgrepo.com/show/312300/hamburger-menu.svg";

export const YOUTUBE_URL ="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg";

export const USER_ICON = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";

export const SEARCH_ICON_URL = "https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png";

const GOOGLE_API_KEY = "AIzaSyA1rsaOqiDupqZ72c1ON1toS1Boc5o8Uv0";
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=CA&key=" + GOOGLE_API_KEY;

export const getVideoByVideoIdURL = (Video_Id) => "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + Video_Id + "&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = (SEARCH_QUERY) => "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + SEARCH_QUERY;

export const SUGGESTED_VIDEOS_BY_KEYWORD = (SEARCH_QUERY) => "https://corsproxy.io/?https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + SEARCH_QUERY + "&key=" + GOOGLE_API_KEY;

export const LIVE_CHAT_COUNT = 5;

