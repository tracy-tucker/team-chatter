import React from 'react'
import '../css/SidebarOption.css'

function SidebarOption({Icon, title}) {
    return (
        <div className="sidebarOption">
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
