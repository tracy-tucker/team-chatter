import React from 'react'
import '../css/Message.css'

function Messages({ message, timestamp, user, userImage}) {
    return (
        <div className="message">
            <img src={userImage} alt={user} />
            <div className="message__info">
                <h4>{user} timestamp...</h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Messages
