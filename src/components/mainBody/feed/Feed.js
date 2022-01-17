import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InOption from './InOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './posts/Post';
import { db } from '../../../fireBase/fireBase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

function Feed() {

    const user = useSelector((state) => state.user.user)

    const [Posts, setPosts] = useState([])
    const [Input, setInput] = useState('')

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => {
                return (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                )
            }))
        })
    }, [])

    const sendPost = (e) => {
        e.preventDefault()

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: Input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }


    return (
        <div className='feed'>
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon></CreateIcon>
                    <form action="">
                        <input value={Input} onChange={(e) => { setInput(e.target.value) }} type="text" />
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

            <FlipMove>
                {Posts.map(({ id, data: { name, description, message, photoUrl } }) => {
                    return (
                        <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl}></Post>
                    )
                })}
            </FlipMove>
        </div>
    )
}

export default Feed
