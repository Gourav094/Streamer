import React from "react";
const ChatMessage = ({name,message}) => {
    return (
        <div className="flex py-1 items-center ">
            <i className="fa-regular fa-user pr-1"></i>
            <span className="px-2 font-semibold text-gray-800">{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage;