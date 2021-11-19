import React from 'react'
import '../css/SidebarOption.css'
import { useNavigate } from 'react-router-dom'

function SidebarOption({Icon, title, id, addChannelOption}) {
    // useNavigate replaces useHistory in react-router-dom v6
    // When you click on a link/go back/go forward
    // push the next page into history: AKA forcing a redirect
    const navigate = useNavigate();

    const selectChannel = () => {
        if (id) {
            if (id) {
                navigate.push(`/room/${id}`);
            } else {
                navigate.push(title);
            }
        }
    }

    const addChannel = () => {
        //
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
