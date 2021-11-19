import React from 'react'
import '../css/Chat.css'
import { useParams } from 'react-router-dom'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';

function Chat() {
    console.log('Where am I?')
    const { roomId } = useParams()
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        {/* Pull name from DB */}
                        <strong>#General</strong>
                        <StarBorderIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoIcon /> Details
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat
