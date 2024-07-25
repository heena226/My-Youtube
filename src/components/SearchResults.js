import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SUGGESTED_VIDEOS_BY_KEYWORD } from '../utils/constants';
import VideoCard from './VideoCard';

const SearchResults = () => {
    
    const [videosData, setVideosData] = useState([]);
    
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get("search-query");
    console.log(searchQuery);

    const searchResultsAPI = async () => {        
        const url = SUGGESTED_VIDEOS_BY_KEYWORD(searchQuery);
        const data = await fetch(url);
        const json = await data.json();
        console.log(json);
        if(json?.items?.length > 0) {
            // console.log("its here", json.items);
            setVideosData(json.items);
        }
    };

    useEffect(() => {

        searchResultsAPI();

    }, [searchQuery]);

    return (
        <div className='flex flex-wrap'>
        {videosData?.map((video, index) => {
                console.log(video);
            return (
                <Link key={video.id} to={"/watch?v=" + video.id.videoId} >
                    <VideoCard 
                        key={video.id.videoId}
                        info={video} 
                    />
                </Link>
            )
        })}
    </div>
    )
}

export default SearchResults