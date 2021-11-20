import React from 'react'
import '../css/SidebarOption.css'
import { useNavigate } from 'react-router-dom'
import db from '../firebase/config';

function SidebarOption({Icon, title, id, addChannelOption}) {
    // useNavigate replaces useHistory in react-router-dom v6
    // When you click on a link/go back/go forward
    // push the next page into history: AKA forcing a redirect
    const navigate = useNavigate();

    const selectChannel = () => {
        if (id) {
            navigate(`/room/${id}`);
        } else {
            navigate(title);
        }
    }

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name')
        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }

    return (
        <div className="sidebarOption"
            onClick={addChannelOption ? addChannel : selectChannel}>
            {/* only render Icon if it exists */}
            {Icon && <Icon className="sidebarOption__icon" />}
            {/* If no icon, then it represents a channel */}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash">#</span> {title}
                </h3>
            )}
        </div>
    )
}

export default SidebarOption
