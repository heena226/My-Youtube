import React from 'react'

const VideoCard = ({info}) => {

  console.log(info);
  const {snippet, statistics} = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-72'>
      <img
        className='rounded-2xl cursor-pointer hover:rounded-none'
        src={thumbnails.medium.url}
        alt={title}
      >
      </img>
      <ul>
        <li className='font-bold py-2'>{title}</li>
        {
          channelTitle && (
            <li>{channelTitle}</li>
          )
        }
        {
          statistics?.viewCount && (
            <li>{statistics.viewCount}</li>
          )
        }
      </ul>
    </div>
  )
}

export default VideoCard;