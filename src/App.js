import React, { useEffect } from 'react'
import Header from './components/Header'
import Feed from './components/mainBody/feed/Feed'
import Sidebar from './components/mainBody/sidebar/Sidebar'
import './css/App.css'
import Login from './components/login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './fireBase/fireBase'
import { login, logout } from './reduxStore/UserSlice'
import Widgets from './components/mainBody/rightWidgets/Widgets'

function App() {

    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoURL
                }))
            } else {
                dispatch(logout())
            }
        })
    }, [])

    return (
        <div className='app'>
            <Header></Header>

            {!user ? <Login></Login> : (
                <div className="app-body">
                    <Sidebar></Sidebar>
                    <Feed></Feed>
                    <Widgets></Widgets>
                </div>
            )}
        </div>
    )
}

export default App
