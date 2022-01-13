import React from 'react'
import './InOption.css'

function InOption({ title, Icon, color }) {
    return (
        <div className='input-option'>
            <Icon style={{ color: color }}></Icon>
            <h4> {title} </h4>
        </div>
    )
}

export default InOption
