import React from 'react'
import '../css/SidebarOption.css'

function SidebarOption({Icon, title}) {
    return (
        <div className="sidebarOption">
            {/* only render Icon if it exists */}
            {Icon && <Icon className="sidebarOption__icon" />}
        </div>
    )
}

export default SidebarOption
