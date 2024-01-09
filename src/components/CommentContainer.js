import React from 'react'


const CommentData = [
    {
        name: "Gourav",
        text: "this is the comment, HEHEHEHHEE",
        reply: []
    },
    {
        name: "Gourav",
        text: "this is the comment, HEHEHEHHEE",
        reply: []
    },
    {
        name: "Gourav",
        text: "this is the comment, HEHEHEHHEE",
        reply: [
            {
                name: "Gourav",
                text: "this is the comment, HEHEHEHHEE",
                reply: [
                    {
                        name: "Gourav",
                        text: "this is the comment, HEHEHEHHEE",
                        reply: [
                            {
                                name: "Gourav",
                                text: "this is the comment, HEHEHEHHEE",
                                reply: [
                                    {
                                        name: "Gourav",
                                        text: "this is the comment, HEHEHEHHEE",
                                        reply: []
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        name: "Gourav",
                        text: "this is the comment, HEHEHEHHEE",
                        reply: []
                    }
                ]
            },
            {
                name: "Gourav",
                text: "this is the comment, HEHEHEHHEE",
                reply: []
            }
        ]
    },
    {
        name: "Gourav",
        text: "this is the comment, HEHEHEHHEE",
        reply: []
    },
    {
        name: "Gourav",
        text: "this is the comment, HEHEHEHHEE",
        reply: []
    },
    {
        name: "Gourav",
        text: "this is the comment, HEHEHEHHEE",
        reply: []
    }
];

const Comment = ({ data }) => {
    const { name, text } = data
    return (
        <div className='my-2 flex items-center gap-4'>
            <i className="fa-regular fa-user "></i>
            <div className='text-sm'>
                <p className='font-semibold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentList = ({ comments }) => {
    return comments.map((comment,index) => (
        <div key={index}>
            <Comment data={comment} />
            {/* reply */}
            <div className='pl-4 ml-4 border-l border-gray-200'>
            <p className='text-blue-700'>replies</p>
                <CommentList comments={comment.reply}/>
            </div>
        </div>
    ))
}

const CommentContainer = () => {
    return (
        <div>
            <h1 className='font-bold text-lg py-3'>Comments</h1>
            {/* <Comment data ={CommentData[0]}/> */}
            <CommentList comments={CommentData} />
        </div>
    )
}

export default CommentContainer
