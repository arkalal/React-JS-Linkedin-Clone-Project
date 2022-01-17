import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import './Sidebar.css'

function Sidebar() {

    const user = useSelector((state) => state.user.user)

    const recentItem = (topic) => (
        <div className="sidebar-recentitem">
            <span className="sidebar-hash">#</span>
            <p> {topic} </p>
        </div>
    )

    return (
        <div>
            <div className='sidebar'>
                <div className="sidebar-top">
                    <img src="/images/cover.jpeg" alt="" />
                    <Avatar src={user.photoURL} className='sidebar-avatar'> {user.email[0]} </Avatar>
                    <h2> {user.displayName} </h2>
                    <h4> {user.email} </h4>
                </div>

                <div className="sidebar-stats">
                    <div className="sidebar-stat">
                        <p>Who Viewed You</p>
                        <p className="sidebar-statnumber">2,543</p>
                    </div>
                    <div className="sidebar-stat">
                        <p>Views on post</p>
                        <p className="sidebar-statnumber">3,500</p>
                    </div>
                </div>

                <div className="sidebar-bottom">
                    <p>Recent</p>
                    {recentItem('reactjs')}
                    {recentItem('softwareengineering')}
                    {recentItem('developer')}
                    {recentItem('coding')}
                    {recentItem('selftaughtarkalal')}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
