import React, { useState, useEffect } from 'react'
import '../css/Chat.css'
import { useParams } from 'react-router-dom'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import db from '../firebase/config';

function Chat() {
    
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId)
            .onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
        }
        db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
            setRoomMessages(
                snapshot.docs.map(doc => doc.data())
        ))

    }, [roomId])
    console.log(roomMessages)

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        {/* Pull name from DB */}
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {/* Messages go here */}
            </div>
        </div>
    )
}

export default Chat

// 2:39:41