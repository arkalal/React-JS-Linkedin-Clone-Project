import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import '../css/HeaderOption.css'

function HeaderOption({ title, Icon, avatar, onClick }) {

    const user = useSelector((state) => state.user.user)

    return (
        <div onClick={onClick} className='header-option'>
            {Icon && <Icon className='header-option-icon'></Icon>}
            {avatar && <Avatar className='header-option-icon'> {user?.email[0]} </Avatar>}
            <h3 className="header-option-title"> {title} </h3>
        </div>
    )
}

export default HeaderOption
