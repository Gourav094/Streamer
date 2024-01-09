import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from "../utils/chatSlice"
import { generateRandomName } from '../utils/helper'
const LiveChat = () => {
    const [hideChat,sethideChat] = useState(false)

    const [liveMessage,setliveMessage] = useState("")
    const dispatch = useDispatch();

    const ChatMessages = useSelector(store => store.chat.messages)

    useEffect(() => {
        if(!hideChat){
            const interval = setInterval(() => {
                // console.log("api polling")
                dispatch(addMessage({
                    name:generateRandomName(),
                    message:"This is testing",
                }))
            }, 1500)

            return () => clearInterval(interval);
        }
    }, [hideChat,addMessage])

    return hideChat ? (<div>
        <button className='font-semibold py-1 hover:bg-gray-100 rounded-full w-full ml-6 border'
                    onClick={() => {sethideChat(!hideChat)}}
        >Show chat</button>
    </div>):(
        <div className='border h-[600px] w-full rounded-xl py-4 ml-6 '>
            <div>
                <div className='border-b px-6 pb-3 font-semibold '>
                    Live chat
                </div>
                <div className='h-[500px]'>
                    <div className='bg-gray-50 px-6 py-1 h-[440px] overflow-y-scroll flex flex-col-reverse border-b'>
                        {ChatMessages.map((msg,index) => 
                            <ChatMessage key={index} name={msg.name} message={msg.message}/>
                        )}
                    </div>
                    <form className='py-2 px-6 text-sm flex items-center border-b' 
                        onSubmit={(e) => {
                            e.preventDefault();
                            dispatch(addMessage({
                                name:"Gourav",
                                message:liveMessage, 
                            }))
                            setliveMessage("")
                        }}
                        >
                        <input className='py-2 px-5 rounded-full bg-gray-100 w-full outline-none' placeholder='Chat...' value = {liveMessage} onChange={(e) => setliveMessage(e.target.value)}/>
                        <i className="fa-regular fa-paper-plane ml-4 cursor-pointer text-gray-700"></i>
                    </form>
                </div>
            </div>
            <div className='px-5'>
                <button className='font-semibold py-1 hover:bg-gray-100 w-full rounded-full'
                    onClick={() => {sethideChat(!hideChat)}}
                >Hide chat</button>
            </div>
        </div>
        
    )
}

export default LiveChat