import React from 'react'
import '../css/Header.css'
import { Avatar } from '@mui/icons-material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/* Avatar for logged-in user */}
                < Avatar
                    className="header__avater"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                {/* Time icon */}
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                {/* Search icon */}
                {/* Input */}
            </div>
            <div classname="header__right">
                {/* Help icon */}
            </div>
        </div>
    )
}

export default Header

// 31:28
