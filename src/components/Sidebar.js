import React from 'react'
import '../css/Sidebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>General Notes</h2>
                    <h3><FiberManualRecordIcon />Tracy Tucker</h3>
                </div>
                <CreateIcon />
                <SidebarOption Icon={} title="Threads" />
            </div>
        </div>
    )
}

export default Sidebar

// 1:07:21