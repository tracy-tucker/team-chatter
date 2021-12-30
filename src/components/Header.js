import React from 'react'
import '../css/Header.css'
import { Avatar } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useStateValue } from "../context/StateProvider"


function Header() {
    const [{user}] = useStateValue()
    return (
        <div className="header">
            <div className="header__left">
                {/* Avatar for logged-in user */}
                < Avatar
                    className="header__avater"
                    alt={user?.displayName}
                    src={user?.photoURL}
                    // alt={user?.displayName}
                    // src={user?.photoURL}
                />
                {/* Time icon */}
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                {/* Search icon */}
                <SearchIcon />
                {/* Input */}
                <input placeholder="Search your team" />
            </div>
            <div className="header__right">
                {/* Help icon */}
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
