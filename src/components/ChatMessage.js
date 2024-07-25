import React from 'react'
import { USER_ICON } from '../utils/constants'

const ChatMessage = ({name, message}) => {

  return (
    <div className='flex items-center bg-white shadow-sm px-2 p-1 mb-1'>
        <div className='w-2/12'>
            <img
                className='h-8 pr-1 w-full'
                alt='User-logo'
                src={USER_ICON} 
            />
        </div>
        <div className='w-10/12'>
            <span className='font-bold text-sm text-gray-600'>{name}</span>
            <span className='pl-2 text-sm'>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage