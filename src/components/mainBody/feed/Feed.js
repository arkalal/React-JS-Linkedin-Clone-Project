import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InOption from './InOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './posts/Post';
import { db } from '../../../firebase/Firebase';

function Feed() {

    const [Posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) => {
            setPosts(snapshot.docs)
        })
    }, [])

    const sendPost = (e) => {
        e.preventDefault()
    }


    return (
        <div className='feed'>
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon></CreateIcon>
                    <form action="">
                        <input type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className="feed-input-options">
                    <InOption title='Photo' Icon={ImageIcon} color='#70B5F9'></InOption>
                    <InOption title='Video' Icon={SubscriptionsIcon} color='#E7A33E'></InOption>
                    <InOption title='Event' Icon={EventNoteIcon} color='#C0CBCD'></InOption>
                    <InOption title='Write article' Icon={CalendarViewDayIcon} color='#7FC15E'></InOption>
                </div>
            </div>

            <Post name='Arka Lal' desription='This is a test' message='This is really nice'></Post>
        </div>
    )
}

export default Feed
