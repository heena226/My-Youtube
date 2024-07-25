import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from 'react-router-dom';
import { getVideoByVideoIdURL } from "../utils/constants";
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [ videoData, setVideoData ] = useState("");

    const video_Id = searchParams.get("v")

    const dispatch = useDispatch();

    const getVideoDetails = async () => {        
        const url = getVideoByVideoIdURL(video_Id);
        const data = await fetch(url);
        const json = await data.json();
        // console.log(json.items[0]);
        setVideoData(json.items[0]);
    }

    useEffect(() => {
        dispatch(closeMenu());

        getVideoDetails();

    }, [dispatch, video_Id]);

  return (
    <div className="flex flex-col w-full">
        <div className='flex'>
            <div className='w-8/12 ml-2'>
                {videoData && 
                    <iframe
                        width="auto"
                        className='w-full rounded-lg'
                        height="500"
                        src={`https://www.youtube.com/embed/${video_Id}`}
                        title={videoData.snippet.title}
                        frameBorder="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                }
            </div>
            <div className='w-4/12'>
                <LiveChat />
            </div>
        </div>
        <div className='w-3/4'>
            <CommentsContainer />
        </div>
    </div>
  )
}

export default WatchPage