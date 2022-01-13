import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InOption from './InOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

function Feed() {
    return (
        <div className='feed'>
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon></CreateIcon>
                    <form action="">
                        <input type="text" />
                        <button type='submit'>Send</button>
                    </form>
                </div>

                <div className="feed-input-options">
                    <InOption title='Photo' Icon={ImageIcon} color='#70B5F9'></InOption>
                    <InOption title='Video' Icon={SubscriptionsIcon} color='#E7A33E'></InOption>
                    <InOption title='Event' Icon={EventNoteIcon} color='#C0CBCD'></InOption>
                    <InOption title='Write article' Icon={CalendarViewDayIcon} color='#7FC15E'></InOption>
                </div>
            </div>

            {/* posts */}
        </div>
    )
}

export default Feed
