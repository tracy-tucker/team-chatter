import React from 'react'
import '../css/Chat.css'
import { useParams } from 'react-router-dom'

function Chat() {
    console.log('Where am I?')
    const { roomId } = useParams()
    return (
        <div className="chat">
            <h2>You are in the {roomId} room</h2>
        </div>
    )
}

export default Chat
