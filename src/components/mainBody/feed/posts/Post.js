import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import InOption from '../InOption'
import './Post.css'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className="post-header">
                <Avatar> {name[0]} </Avatar>

                <div className="post-info">
                    <h2> {name} </h2>
                    <p> {description} </p>
                </div>
            </div>

            <div className="post-body">
                <p> {message} </p>
            </div>

            <div className="post-buttons">
                <InOption title='Like' color='gray' Icon={ThumbUpAltIcon}></InOption>
                <InOption title='Comment' color='gray' Icon={ChatBubbleIcon}></InOption>
                <InOption title='Share' color='gray' Icon={ShareOutlinedIcon}></InOption>
                <InOption title='Send' color='gray' Icon={SendOutlinedIcon}></InOption>
            </div>
        </div>
    )
})

export default Post
