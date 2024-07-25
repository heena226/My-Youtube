import React from 'react'
import { USER_ICON } from '../utils/constants';

const Comment = ({data}) => {
    const { name, comment, replies } = data;
  return (
    <div className='flex bg-gray-100 px-3 py-1'>
        <img
            className='w-10 h-10 mt-1 mr-1'
            alt='User'
            src={USER_ICON }
        />
        <div>
            <p className='font-bold'>{name}</p>
            <p>{comment}</p>
        </div>
    </div>
  )
}

export default Comment