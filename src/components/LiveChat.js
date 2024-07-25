import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generate, newQuote } from '../utils/Helper';

const LiveChat = () => {
    
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect (() => {
        const interval = setInterval(() => {
            // API Pooling
            // console.log("API Pooling now");
                    
            // Random data generator
            const randomName = generate();
            const randomMessage = newQuote();

            dispatch(addMessage({
                name: randomName,
                message: randomMessage,
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const onSendLiveMessage = (e) => {
        e.preventDefault();
        dispatch(addMessage({
            name: "Heena Taneja",
            message: liveMessage,
        }));
        setLiveMessage("");
    }

  return (
    <div>
        <div className='p-2 mx-2 h-[500px] flex flex-col-reverse border border-gray-300 bg-gray-100 rounded-lg overflow-y-scroll'>
            {chatMessages.map((chatMessage, index) => {
                    return (
                        <ChatMessage 
                            key={index}
                            name= {chatMessage.name}
                            message={chatMessage.message} 
                        />
                    )
                }
            )}
        </div>
        <form className='w-full flex' onSubmit={(e) => {onSendLiveMessage(e)}}>
            <input 
                type='text' 
                value={liveMessage}
                onChange={(e) => setLiveMessage(e.target.value)}
                placeholder='Type your message here..'
                className='w-72 border border-gray-600 m-2 p-2'
            />
            <button 
                className="mt-2 w-10 h-10 flex items-center justify-center hover:rounded-full hover:border hover:bg-gray-200"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25px" height="25px" className="fill-current text-gray-700">
                    <path d="M2 21L23 12 2 3v7l15 2-15 2z"/>
                </svg>
            </button>
        </form>
    </div>
  )
}

export default LiveChat