import React from 'react'
import "./Message.module.css"
import "./HW1"

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={"border"}>
            <img src={props.avatar}/>
            <p>{props.name}</p>
            <p>{props.message}</p>
            <p>{props.time}</p>
        </div>
    )
}

export default Message
