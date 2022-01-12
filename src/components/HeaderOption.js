import { Avatar } from '@mui/material'
import React from 'react'
import '../css/HeaderOption.css'

function HeaderOption({ title, Icon, avatar }) {
    return (
        <div className='header-option'>
            {Icon && <Icon className='header-option-icon'></Icon>}
            {avatar && <Avatar className='header-option-icon'></Avatar>}
            <h3 className="header-option-title"> {title} </h3>
        </div>
    )
}

export default HeaderOption
