import React from 'react'
import "../css/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

function Header() {
    return (
        <div className='header'>
            <div className="header-left">
                <img src="/images/link-logo.png" alt="" />

                <div className="header-search">
                    <SearchIcon></SearchIcon>
                    <input type="text" />
                </div>
            </div>

            <div className="header-right">
                <HeaderOption title='Home' Icon={HomeIcon}></HeaderOption>
                <HeaderOption title='My Network' Icon={PeopleAltIcon}></HeaderOption>
                <HeaderOption title='Jobs' Icon={BusinessCenterIcon}></HeaderOption>
                <HeaderOption title='Messaging' Icon={ChatIcon}></HeaderOption>
                <HeaderOption title='Notifications' Icon={NotificationsIcon}></HeaderOption>
                <HeaderOption avatar={AccessibilityNewIcon} title='Arka'></HeaderOption>
            </div>
        </div>
    )
}

export default Header
